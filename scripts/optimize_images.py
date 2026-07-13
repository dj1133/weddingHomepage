"""Generate responsive web images without modifying the source photographs."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageOps, features


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "assets" / "images" / "web"


@dataclass(frozen=True)
class ImageSpec:
    slug: str
    source: str
    widths: tuple[int, ...]


HALL_WIDTHS = (480, 768, 1024)
PHOTO_WIDTHS = (480, 960, 1600)
DONG_BANG_PHOTO_WIDTHS = (480, 960, 1600, 1920)

IMAGE_SPECS = (
    ImageSpec("hall-dongbang", "assets/images/hall_dongbang.png", HALL_WIDTHS),
    ImageSpec("hall-jsquare", "assets/images/hall_jsquare.png", HALL_WIDTHS),
    ImageSpec("hall-mconv", "assets/images/hall_Mconv.png", HALL_WIDTHS),
    ImageSpec("hall-therium", "assets/images/hall_theRium.png", HALL_WIDTHS),
    ImageSpec("hall-shconv", "assets/images/shc/hall_SHconv.jpg", PHOTO_WIDTHS),
    ImageSpec("dongbang-grand-main", "assets/images/dongbang/db_hall.jpg", DONG_BANG_PHOTO_WIDTHS),
    ImageSpec("dongbang-grand-ceremony", "assets/images/dongbang/994A4437---.jpg", DONG_BANG_PHOTO_WIDTHS),
    ImageSpec("dongbang-grand-bridal-1", "assets/images/dongbang/308A1683---.jpg", DONG_BANG_PHOTO_WIDTHS),
    ImageSpec("dongbang-grand-bridal-2", "assets/images/dongbang/994A4415---.jpg", DONG_BANG_PHOTO_WIDTHS),
    ImageSpec("dongbang-harmony-main", "assets/images/dongbang/308A1696---.jpg", DONG_BANG_PHOTO_WIDTHS),
    ImageSpec("dongbang-harmony-bridal", "assets/images/dongbang/994A4385---.jpg", DONG_BANG_PHOTO_WIDTHS),
    ImageSpec("shconv-photo-1", "assets/images/shc/KakaoTalk_20260712_122805350.jpg", PHOTO_WIDTHS),
    ImageSpec("shconv-photo-2", "assets/images/shc/KakaoTalk_20260712_122805350_01.jpg", PHOTO_WIDTHS),
    ImageSpec("shconv-photo-3", "assets/images/shc/KakaoTalk_20260712_122805350_03.jpg", PHOTO_WIDTHS),
    ImageSpec("shconv-photo-4", "assets/images/shc/KakaoTalk_20260712_122805350_04.jpg", PHOTO_WIDTHS),
    ImageSpec("shconv-photo-5", "assets/images/shc/KakaoTalk_20260712_122805350_05.jpg", PHOTO_WIDTHS),
    ImageSpec("shconv-photo-6", "assets/images/shc/KakaoTalk_20260712_122805350_06.jpg", PHOTO_WIDTHS),
    ImageSpec("shconv-photo-7", "assets/images/shc/KakaoTalk_20260712_122805350_07.jpg", PHOTO_WIDTHS),
    ImageSpec("shconv-photo-8", "assets/images/shc/KakaoTalk_20260712_122805350_08.jpg", PHOTO_WIDTHS),
)


def save_variant(image: Image.Image, destination: Path, image_format: str) -> None:
    if image_format == "AVIF":
        image.save(destination, format="AVIF", quality=50, speed=6)
        return

    image.save(destination, format="WEBP", quality=82, method=6, optimize=True)


def main() -> None:
    if not features.check("webp") or not features.check("avif"):
        raise RuntimeError("Pillow must include both WebP and AVIF support.")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    total_bytes = 0

    for spec in IMAGE_SPECS:
        source_path = ROOT / spec.source
        if not source_path.is_file():
            raise FileNotFoundError(source_path)

        with Image.open(source_path) as opened:
            source = ImageOps.exif_transpose(opened).convert("RGB")
            if max(spec.widths) > source.width:
                raise ValueError(
                    f"{spec.slug}: requested width exceeds source width {source.width}px"
                )

            for width in spec.widths:
                height = round(source.height * width / source.width)
                resized = source.resize((width, height), Image.Resampling.LANCZOS)

                for suffix, image_format in (("avif", "AVIF"), ("webp", "WEBP")):
                    destination = OUTPUT_DIR / f"{spec.slug}-{width}.{suffix}"
                    save_variant(resized, destination, image_format)
                    total_bytes += destination.stat().st_size

                resized.close()

            source.close()

    print(
        f"Generated {len(IMAGE_SPECS)} responsive image sets "
        f"({total_bytes / 1024 / 1024:.1f} MB) in {OUTPUT_DIR}"
    )


if __name__ == "__main__":
    main()
