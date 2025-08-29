"use client";

import { addMovie } from "@/actions/movie";
import { MovieItem } from "@/components/movies/movie-item";
import { MovieMarkForm } from "@/components/movies/movie-mark-form";
import { useAuth } from "@/contexts/auth";
import { TMDBMovie } from "@/lib/tmdb";
import { useRouter } from "next/navigation";

import { useRef, useState } from "react";

export function MovieDialog({ movie }: { movie: TMDBMovie }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = (e: React.MouseEvent) => {
    e.stopPropagation();
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  //
  const [watched, setWatched] = useState(false);

  const { userId } = useAuth();

  const { replace } = useRouter();

  return (
    <>
      <button
        className="absolute inset-0"
        onClick={openDialog}
        aria-label="查看详情"
      ></button>
      <dialog
        ref={dialogRef}
        className="rounded-lg p-0 max-w-md w-[90vw] shadow-xl backdrop:bg-black/40 m-0 fixed top-1/2 left-1/2 -translate-1/2"
      >
        <div className="p-6 relative flex flex-col gap-6">
          <button
            onClick={closeDialog}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-700 text-xl"
            aria-label="关闭"
            type="button"
          >
            ×
          </button>
          <MovieItem movie={movie} />
          {watched ? (
            <MovieMarkForm
              onSubmit={async (data) => {
                const { id, ...raw } = movie;
                await addMovie({ ...data, ...raw, userId });
                replace("/dashboard/movies");
              }}
            />
          ) : (
            <button
              className="w-full bg-black text-white px-4 py-2 rounded hover:bg-black/80 transition-colors"
              onClick={() => setWatched(true)}
            >
              看过
            </button>
          )}
        </div>
      </dialog>
    </>
  );
}
