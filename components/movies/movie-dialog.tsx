"use client";

import { useRef, useState } from "react";

import { addMovie } from "@/actions/movie";
import { MovieItem } from "@/components/movies/movie-item";
import { MovieMarkForm } from "@/components/movies/movie-mark-form";
import { useAuth } from "@/contexts/auth";
import { TMDBMovie } from "@/lib/tmdb";
import { useRouter } from "next/navigation";

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
        className="m-auto w-[90vw] max-w-md rounded-lg p-0 shadow-xl backdrop:bg-black/40"
      >
        <div className="relative flex flex-col gap-6 p-6">
          <button
            onClick={closeDialog}
            className="absolute top-3 right-3 text-xl text-gray-400 hover:text-gray-700"
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
              className="w-full rounded bg-black px-4 py-2 text-white transition-colors hover:bg-black/80"
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
