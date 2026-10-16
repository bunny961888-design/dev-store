"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { QRCodeSVG } from "qrcode.react";
import { X, CheckCircle2, Copy, Download, ShieldCheck } from "lucide-react";

interface CheckoutModalProps {
  product: Product;
  onClose: () => void;
}

export default function CheckoutModal({ product, onClose }: CheckoutModalProps) {
  // Replace this with your own UPI ID later (e.g. yourname@okaxis / 9876543210@ybl)
  const YOUR_UPI_ID = "sunithavantala@axl"; 
  const PAYEE_NAME = "CodeVault Projects";

  const [email, setEmail] = useState("");
  const [utr, setUtr] = useState("");
  const [copied, setCopied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // NPCI standard UPI format
  const upiUrl = `upi://pay?pa=${YOUR_UPI_ID}&pn=${encodeURIComponent(
    PAYEE_NAME
  )}&am=${product.price}&cu=INR&tn=${encodeURIComponent(
    `Order for ${product.title.slice(0, 20)}`
  )}`;

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(YOUR_UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVerifyPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!utr.trim() || utr.length < 6) {
      alert("Please enter a valid UPI Transaction / UTR number.");
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl text-slate-100">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white transition"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="text-center">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20">
                Direct UPI Instant Checkout
              </span>
              <h2 className="mt-3 text-lg font-bold text-white line-clamp-1">
                {product.title}
              </h2>
              <p className="text-2xl font-black text-indigo-400 mt-1">₹{product.price}</p>
            </div>

            {/* Dynamic QR Code */}
            <div className="mt-4 flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-inner">
              <QRCodeSVG value={upiUrl} size={170} level="M" />
              <p className="mt-2 text-[11px] font-semibold text-slate-800">
                Scan with GPay / PhonePe / Paytm / BHIM
              </p>
            </div>

            {/* UPI Copy Box */}
            <div className="mt-3 flex items-center justify-between rounded-lg bg-slate-800/80 px-3 py-2 text-xs border border-slate-700">
              <span className="text-slate-400">UPI ID:</span>
              <span className="font-mono text-indigo-300 font-medium">{YOUR_UPI_ID}</span>
              <button
                type="button"
                onClick={handleCopyUPI}
                className="text-xs text-slate-300 hover:text-white flex items-center gap-1"
              >
                <Copy className="h-3 w-3" />
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Verification Form */}
            <form onSubmit={handleVerifyPayment} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Your Email (Files delivery)
                </label>
                <input
                  type="email"
                  required
                  placeholder="student@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Transaction / UTR Reference No.
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 428192837192"
                  value={utr}
                  onChange={(e) => setUtr(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white transition hover:bg-indigo-500 active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <ShieldCheck className="h-4 w-4" />
                Verify & Unlock Download
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-400" />
            <h3 className="mt-4 text-xl font-bold text-white">Payment Verified!</h3>
            <p className="mt-1 text-xs text-slate-400">
              Transaction ID: <span className="font-mono text-slate-300">{utr}</span>
            </p>
            <p className="mt-2 text-xs text-slate-300">
              Download access has been activated for <span className="text-indigo-400">{email}</span>.
            </p>

            <div className="mt-6 space-y-2">
              <a
                href={product.downloadUrl || "https://drive.google.com/uc?export=download&id=1kjV6l4lxLNTjjb0mkerlt0uLajZl-6mk"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition"
              >
                <Download className="h-4 w-4" />
                Download Complete Project ZIP
              </a>
              <button
                onClick={onClose}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 py-2 text-xs text-slate-300 hover:bg-slate-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}