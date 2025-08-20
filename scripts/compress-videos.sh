#!/bin/bash

# Video compression script for production deployment
# This script uses ffmpeg to compress videos for web optimization

echo "🎥 Starting video compression..."

# Create compressed directory if it doesn't exist
mkdir -p public/videos/compressed

# Compress light theme video
if [ -f "public/videos/landing-page-hero-animation-light-theme.mp4" ]; then
    echo "Compressing light theme video..."
    ffmpeg -i public/videos/landing-page-hero-animation-light-theme.mp4 \
        -c:v libx264 \
        -preset slow \
        -crf 28 \
        -vf "scale=1920:1080" \
        -movflags +faststart \
        -c:a aac \
        -b:a 128k \
        public/videos/compressed/landing-page-hero-animation-light-theme.mp4 \
        -y
fi

# Compress dark theme video
if [ -f "public/videos/landing-page-hero-animation-dark-them.mp4" ]; then
    echo "Compressing dark theme video..."
    ffmpeg -i public/videos/landing-page-hero-animation-dark-them.mp4 \
        -c:v libx264 \
        -preset slow \
        -crf 28 \
        -vf "scale=1920:1080" \
        -movflags +faststart \
        -c:a aac \
        -b:a 128k \
        public/videos/compressed/landing-page-hero-animation-dark-them.mp4 \
        -y
fi

# Generate WebM versions for better browser support
echo "Generating WebM versions..."

if [ -f "public/videos/landing-page-hero-animation-light-theme.mp4" ]; then
    ffmpeg -i public/videos/landing-page-hero-animation-light-theme.mp4 \
        -c:v libvpx-vp9 \
        -crf 35 \
        -b:v 0 \
        -vf "scale=1920:1080" \
        -c:a libopus \
        -b:a 128k \
        public/videos/compressed/landing-page-hero-animation-light-theme.webm \
        -y
fi

if [ -f "public/videos/landing-page-hero-animation-dark-them.mp4" ]; then
    ffmpeg -i public/videos/landing-page-hero-animation-dark-them.mp4 \
        -c:v libvpx-vp9 \
        -crf 35 \
        -b:v 0 \
        -vf "scale=1920:1080" \
        -c:a libopus \
        -b:a 128k \
        public/videos/compressed/landing-page-hero-animation-dark-them.webm \
        -y
fi

echo "✅ Video compression complete!"
echo "Note: Replace original videos with compressed versions before deployment"
echo "cp public/videos/compressed/* public/videos/"