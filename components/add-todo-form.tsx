"use client";

import { addTodo } from "@/actions/todo";

export function AddTodoForm({ userId }: { userId: string }) {
  return (
    <form
      className="flex items-center gap-2 p-4 bg-white rounded shadow"
      action={async (formData) => {
        const text = formData.get("text") as string;
        await addTodo({ text, userId });
      }}
    >
      <input
        type="text"
        name="text"
        placeholder="Add a new todo"
        className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        autoComplete="off"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>
  );
}
