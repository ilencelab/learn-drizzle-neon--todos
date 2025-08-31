import { editMovie } from "@/actions/movie";
import { Rating } from "@/components/movies/rating";
import { Submit } from "@/components/ui/submit";
import { redirect } from "next/navigation";

export function WatchedMovieMarkForm({
  id,
  watchedAt,
  rating,
  thoughts,
}: {
  id: number;
  watchedAt: string;
  rating: number;
  thoughts: string;
}) {
  const formAction = async (formData: FormData) => {
    "use server";

    const rating = parseInt(formData.get("rating") as string);
    const thoughts = formData.get("thoughts") as string;

    await editMovie(id, { rating, thoughts });
    redirect("/dashboard/movies");
  };

  return (
    <form action={formAction} className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="mb-1 block text-sm font-medium">看完日期</label>
        <span className="text-sm text-gray-500">{watchedAt}</span>
      </div>
      <div className="flex items-center justify-between">
        <label className="mb-1 block text-sm font-medium">我的评分</label>
        <Rating name="rating" defaultValue={rating} />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium">我的想法</label>
        <textarea
          name="thoughts"
          defaultValue={thoughts}
          className="min-h-[80px] w-full resize-none rounded border px-3 py-2"
          placeholder="写下你的观后感..."
        />
      </div>
      <div className="fixed inset-x-0 bottom-0 bg-white p-4">
        <Submit className="w-full rounded bg-black px-4 py-2 text-white transition-colors hover:bg-black/80 disabled:bg-black/80">
          保存
        </Submit>
      </div>
    </form>
  );
}
