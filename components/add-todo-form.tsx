"use client";

import { addTodo } from "@/actions/todo";

export function AddTodoForm({ userId }: { userId: string }) {
  return (
    <form
      className="flex items-center gap-2 rounded bg-white p-4 shadow"
      action={async (formData) => {
        const text = formData.get("text") as string;
        await addTodo({ text, userId });
      }}
    >
      <input
        type="text"
        name="text"
        placeholder="Add a new todo"
        className="flex-1 rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        autoComplete="off"
      />
      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}
