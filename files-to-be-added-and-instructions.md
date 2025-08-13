# Files to be Added and Instructions for SirkupAI Website

## Required Files to Add

### 1. Logo Files
**Main Logo:**
- **File to add:** `sirkupai-logo.svg`
- **Place in:** `/public/sirkupai-logo.svg`
- **Usage:** Will appear in the sidebar header and other branding locations

### 2. Partner Logos
Add the following partner logo files to `/public/partners/`:

- **NestHive Logo**
  - File: `nesthive-logo.svg` or `nesthive-logo.png`
  - Place as: `/public/partners/nesthive-logo.svg`

- **VoicesofPak Logo**
  - File: `voicesofpak-logo.svg` or `voicesofpak-logo.png`
  - Place as: `/public/partners/voicesofpak-logo.svg`

- **Bytes for All (B4A) Logo**
  - File: `bytesforall-logo.svg` or `bytesforall-logo.png`
  - Place as: `/public/partners/bytesforall-logo.svg`

- **Frische Logo**
  - File: `frische-logo.svg` or `frische-logo.png`
  - Place as: `/public/partners/frische-logo.svg`

- **Carzone Logo**
  - File: `carzone-logo.svg` or `carzone-logo.png`
  - Place as: `/public/partners/carzone-logo.svg`

### 3. Hero Section Images
Add preview/demonstration images for:

- **Content Intelligence Preview**
  - File: Any screenshot or mockup of the content intelligence system
  - Place as: `/public/images/content-intelligence-preview.png`

- **Conversational AI Preview**
  - File: Any screenshot or mockup of the conversational AI system
  - Place as: `/public/images/conversational-ai-preview.png`

### 4. Feature Images
Add images for the four main service areas:

- **Content Intelligence Illustration**
  - File: Illustration or image representing content creation
  - Place as: `/public/images/content-feature.png`

- **Conversational AI Illustration**
  - File: Illustration showing chat/conversation interface
  - Place as: `/public/images/conversation-feature.png`

- **Academy Illustration**
  - File: Education/training related image
  - Place as: `/public/images/academy-feature.png`

- **Systems Illustration**
  - File: Technical/automation system visualization
  - Place as: `/public/images/systems-feature.png`

### 5. Background Images
Add decorative background images for sections:

- **Enable Workforce Section Background**
  - File: Abstract or tech-related background
  - Place as: `/public/images/workforce-bg.png`

- **Build AI Products Section Background**
  - File: Abstract gradient or tech visualization
  - Place as: `/public/images/build-ai-bg.png`

- **Security Section Background**
  - File: Security/privacy themed background
  - Place as: `/public/images/security-bg.png`

## File Naming Instructions

When you add these files, please ensure:

1. **Use lowercase filenames** with hyphens (no spaces or underscores)
2. **Prefer SVG format** for logos when available (better scaling)
3. **Use PNG format** for complex images or screenshots
4. **Keep file sizes optimized** (compress images before adding)

## Implementation Notes

### What the Code Will Reference:
The implementation will automatically reference these file paths. Once you add the files with these exact names and locations, they will appear in:

- Sidebar header (SirkupAI logo)
- Partner logos section
- Hero section previews
- Case studies section
- Feature illustrations
- Background images for various sections

### If You Don't Have Certain Files:
- The code will show placeholder gradients (colored backgrounds) where images are missing
- You can add the files later and they will automatically appear
- Partner logos will show as text if image files are not found

### Color Scheme Being Used:
- Primary: Black (#000000)
- Secondary: Gray shades
- Accent colors: Gradients using blue, green, yellow, purple tones
- Background: White with light gray sections

## Quick Setup Steps:

1. Create the `/public/partners/` directory if it doesn't exist
2. Create the `/public/images/` directory if it doesn't exist
3. Add your SirkupAI logo to `/public/sirkupai-logo.svg`
4. Add partner logos to `/public/partners/` with the names specified above
5. Add any available preview images to `/public/images/`

The website will work without all images, showing styled placeholders where files are missing.