import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function J(status: number, data: unknown) {
  return NextResponse.json(data, { status });
}

export async function POST(req: NextRequest) {
  // accept POST from browser, forward to upstream as GET ?query=
  let body: { query?: string } = {};
  try { body = await req.json(); } catch { return J(400, { error: "Bad JSON body" }); }

  const query = String(body?.query ?? "").trim();
  if (!query) return J(400, { error: "Missing 'query' string" });

  const base = process.env.SIRKUP_WEBHOOK_URL;
  if (!base) return J(500, { error: "Server not configured (SIRKUP_WEBHOOK_URL missing)" });

  const url = new URL(base);
  url.searchParams.set("query", query);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    const upstream = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Accept: "text/html, application/json;q=0.9, */*;q=0.8",
        // If your upstream needs an API key, add an Authorization header here.
        // Authorization: `Bearer ${process.env.SIRKUP_API_KEY}`,
      },
      cache: "no-store",
      signal: controller.signal,
    });

    const ct = upstream.headers.get("content-type") ?? "text/html; charset=utf-8";
    const text = await upstream.text();
    clearTimeout(timeout);

    if (!upstream.ok) {
      if (process.env.NODE_ENV !== "production") {
        return J(502, { error: "Upstream error", status: upstream.status, body: text.slice(0, 1000) });
      }
      return J(502, { error: "Upstream error" });
    }

    return new NextResponse(text, { status: 200, headers: { "Content-Type": ct } });
  } catch (err: any) {
    clearTimeout(timeout);
    if (err?.name === "AbortError") return J(504, { error: "Upstream timeout (12s)" });
    console.error("Upstream fetch failed:", err);
    return J(502, { error: "Upstream fetch failed" });
  }
}
