"use client";

import { useState } from "react";

type RatingProps = {
  name?: string;
  defaultValue?: number;
};

export function Rating({ name, defaultValue = 0 }: RatingProps) {
  const [rating, setRating] = useState<number>(defaultValue);

  return (
    <>
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
      {name && <input type="hidden" name={name} value={rating} />}
    </>
  );
}
