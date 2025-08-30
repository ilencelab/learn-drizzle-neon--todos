"use client";

import { useState } from "react";

export function MovieMarkForm({
  defaultDate,
  defaultStars = 0,
  defaultThought = "",
  onSubmit,
}: {
  defaultDate?: string;
  defaultStars?: number;
  defaultThought?: string;
  onSubmit?: (data: {
    watchedAt: string;
    rating: number;
    thoughts: string;
  }) => void;
}) {
  // 默认日期为今天
  const today = new Date().toISOString().slice(0, 10);
  const watchedAt = defaultDate || today;
  const [rating, setRating] = useState(defaultStars);
  const [thoughts, setThoughts] = useState(defaultThought);
  const [saving, setSaving] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    onSubmit?.({ watchedAt, rating, thoughts });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="mb-1 block text-sm font-medium">看完日期</label>
        <span className="text-sm text-gray-500">{watchedAt}</span>
      </div>
      <div className="flex items-center justify-between">
        <label className="mb-1 block text-sm font-medium">我的评分</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              onClick={() => setRating(n)}
              className={
                n <= rating
                  ? "text-2xl text-yellow-400"
                  : "text-2xl text-gray-300"
              }
              aria-label={`打${n}星`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium">我的想法</label>
        <textarea
          value={thoughts}
          onChange={(e) => setThoughts(e.target.value)}
          className="min-h-[80px] w-full resize-none rounded border px-3 py-2"
          placeholder="写下你的观后感..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded bg-black px-4 py-2 text-white transition-colors hover:bg-black/80"
        disabled={saving}
      >
        {saving ? "保存中..." : "保存"}
      </button>
    </form>
  );
}
