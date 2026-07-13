# Responsive image generation

The website serves generated AVIF and WebP files from `assets/images/web`.
Source photographs remain unchanged under `assets/images`.

## Setup

Use the same Python and Pillow version on each development PC:

```powershell
python -m pip install -r scripts/requirements-images.txt
```

## Generate

Run this command from the project root whenever a source image changes:

```powershell
python scripts/optimize_images.py
```

Commit and deploy the generated files together with the HTML changes. Cafe24
only serves the generated static files and does not need Python or Pillow.
Do not edit files in `assets/images/web` manually.
