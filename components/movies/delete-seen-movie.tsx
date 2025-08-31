import { deleteMovie } from "@/actions/movie";
import { Submit } from "@/components/ui/submit";

export function DeleteSeenMovie({ id }: { id: number }) {
  return (
    <form action={deleteMovie.bind(null, id)}>
      <Submit className="dropdown-menu disabled:bg-gray-100">删除</Submit>
    </form>
  );
}
