"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ImageModalProps {
  src: string;
  alt: string;
  thumbnailClassName?: string;
}

export function ImageModal({ src, alt, thumbnailClassName }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const defaultClasses = "relative w-full max-w-[200px] aspect-[1.5/1] rounded-lg overflow-hidden border border-[rgba(255,255,255,0.05)]";
  const wrapperClass = thumbnailClassName || defaultClasses;

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={`${wrapperClass} cursor-pointer transition-all duration-300 hover:scale-105 hover:border-[var(--copper)] hover:shadow-[0_0_20px_rgba(255,94,0,0.15)] z-10`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
              className="relative z-10 w-[95vw] sm:w-[90vw] max-w-6xl h-[85vh] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl bg-[#050505]"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors backdrop-blur-md border border-[rgba(255,255,255,0.1)]"
                aria-label="Close image"
              >
                <X size={20} />
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  quality={100}
                />
              </div>
            </motion.div>
          </div>
        )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
