"use client";

import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Code2, Sparkles, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-600 text-white">
              <Code2 className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">CodeVault</span>
          </div>
          <span className="text-xs text-slate-400 border border-slate-800 rounded-full px-3 py-1 bg-slate-900">
            B.Tech Final Year Ready
          </span>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium text-indigo-400 mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          Production-grade projects with complete source code & PPTs
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Launch Your Major & Mini Projects in <span className="text-indigo-400">Minutes</span>
        </h1>

        <p className="mt-4 text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
          Get verified, working source code, detailed documentation, IEEE base papers, and viva-ready explanation guides.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" /> 100% Tested Code
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" /> PPT & Docs Included
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Instant Download
          </span>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-8 border-b border-slate-800/80 pb-4">
          <h2 className="text-xl font-bold text-white">Available Projects</h2>
          <span className="text-xs text-slate-400">{PRODUCTS.length} templates ready</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}