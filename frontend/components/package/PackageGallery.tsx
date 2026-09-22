"use client";

import { useEffect, useState } from "react";

type PackageGalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type PackageGalleryProps = {
  images: PackageGalleryImage[];
  heading?: string;
};

export default function PackageGallery({
  images,
  heading = "Journey gallery",
}: PackageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visibleImages = images.slice(0, 5);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => {
          if (current === null) return null;
          return (current + 1) % images.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => {
          if (current === null) return null;
          return (current - 1 + images.length) % images.length;
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  if (images.length === 0) {
    return null;
  }

  function showPrevious() {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current - 1 + images.length) % images.length;
    });
  }

  function showNext() {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + 1) % images.length;
    });
  }

  return (
    <>
      <section className="bg-white px-6 py-20 text-[#081827] sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
                In Pictures
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                {heading}
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-[#081827]/60">
              Explore landscapes, settlements, and moments from the journey.
            </p>
          </div>

          {/* Gallery grid */}
          <div className="mt-12 grid gap-3 md:mt-16 md:grid-cols-4 md:grid-rows-2">
            {visibleImages.map((image, index) => {
              const isPrimary = index === 0;

              return (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden bg-[#081827] text-left ${
                    isPrimary
                      ? "min-h-[420px] md:col-span-2 md:row-span-2"
                      : "min-h-[220px]"
                  }`}
                  aria-label={`Open image ${index + 1}: ${image.alt}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${image.src})`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#081827]/65 via-transparent to-transparent" />

                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-sm font-medium leading-6 text-white/85">
                        {image.caption}
                      </p>
                    </div>
                  )}

                  {index === visibleImages.length - 1 &&
                    images.length > 5 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#081827]/60 backdrop-blur-[1px]">
                        <span className="rounded-full border border-white/30 bg-[#081827]/40 px-5 py-3 text-sm font-bold text-white">
                          View all {images.length} photos
                        </span>
                      </div>
                    )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020812]/95 px-4 py-6 backdrop-blur-sm sm:px-8"
          role="dialog"
          aria-modal="true"
          aria-label="Journey image gallery"
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xl text-white transition hover:bg-white hover:text-[#081827]"
            aria-label="Close gallery"
          >
            ×
          </button>

          {/* Previous */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xl text-white transition hover:bg-white hover:text-[#081827] sm:left-8"
              aria-label="Previous image"
            >
              ←
            </button>
          )}

          {/* Current image */}
          <div className="flex h-full w-full max-w-6xl flex-col items-center justify-center">
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="max-h-[78vh] max-w-full object-contain"
            />

            <div className="mt-5 text-center">
              {images[activeIndex].caption && (
                <p className="text-sm leading-6 text-white/70">
                  {images[activeIndex].caption}
                </p>
              )}

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A46A]">
                {activeIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={showNext}
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xl text-white transition hover:bg-white hover:text-[#081827] sm:right-8"
              aria-label="Next image"
            >
              →
            </button>
          )}
        </div>
      )}
    </>
  );
}