"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { Download, ExternalLink, ShieldCheck } from "lucide-react";
import CheckoutModal from "./CheckoutModal";

export default function ProductCard({ product }: { product: Product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur-md transition-all hover:border-indigo-500/50 hover:shadow-indigo-500/10">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Verified Code</span>
            </div>
          </div>

          <h3 className="mt-4 text-xl font-bold text-white tracking-tight">
            {product.title}
          </h3>

          <p className="mt-2 text-sm text-slate-400 line-clamp-2">
            {product.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {product.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-slate-800 px-2.5 py-0.5 text-xs text-slate-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-slate-800/80 pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">₹{product.price}</span>
            <span className="text-sm text-slate-500 line-through">₹{product.originalPrice}</span>
            <span className="text-xs font-bold text-emerald-400">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          </div>

          <div className="mt-4 flex gap-2">
            {product.demoUrl && (
              <a
                href={product.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1 rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-700"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Demo
              </a>
            )}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-indigo-500 active:scale-[0.98]"
            >
              <Download className="h-3.5 w-3.5" />
              Get Code & Docs
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <CheckoutModal product={product} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}