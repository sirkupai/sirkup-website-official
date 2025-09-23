import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";            // ensure server (not edge) so env is available
export const dynamic = "force-dynamic";     // disable caching for this route

export async function POST(req: NextRequest) {
  // 1) Parse JSON body
  let body: { query?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad JSON body" }, { status: 400 });
  }
  const query = (body.query ?? "").trim();
  if (!query) {
    return NextResponse.json({ error: "Missing 'query' string" }, { status: 400 });
  }

  // 2) Env check
  const upstreamBase = process.env.SIRKUP_WEBHOOK_URL;
  if (!upstreamBase) {
    // This is most likely your 500. Set SIRKUP_WEBHOOK_URL in .env.local and in your hosting env.
    return NextResponse.json({ error: "Server not configured (SIRKUP_WEBHOOK_URL missing)" }, { status: 500 });
  }

  // 3) Build upstream URL with query
  const url = new URL(upstreamBase);
  url.searchParams.set("query", query);

  // 4) Timeout
  const controller = new AbortController();
  const timeoutMs = 10_000;
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const upstream = await fetch(url.toString(), {
      method: "GET",
      headers: {
        // add auth headers from env here if you need them:
        // Authorization: `Bearer ${process.env.SIRKUP_API_KEY}`,
        Accept: "text/html, application/json;q=0.9, */*;q=0.8",
      },
      cache: "no-store",
      signal: controller.signal,
    });

    const contentType = upstream.headers.get("content-type") ?? "text/html; charset=utf-8";
    const text = await upstream.text();

    clearTimeout(timeout);

    // Pass upstream status & content type through
    return new NextResponse(text, {
      status: upstream.status,
      headers: { "Content-Type": contentType },
    });
  } catch (err: any) {
    clearTimeout(timeout);
    if (err?.name === "AbortError") {
      return NextResponse.json({ error: `Upstream timeout after ${timeoutMs}ms` }, { status: 504 });
    }
    // Log server-side for debugging
    console.error("Upstream fetch failed:", err);
    return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  }
}
