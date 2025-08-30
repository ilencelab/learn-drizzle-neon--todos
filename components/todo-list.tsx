"use client";

import { deleteTodo, editTodo, toggleTodo } from "@/actions/todo";
import { Todo } from "@/types/db";

type TodoListProps = {
  todos: Todo[];
};

export function TodoList({ todos }: TodoListProps) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center gap-4 rounded bg-white p-4 shadow"
        >
          <button
            className={
              todo.done
                ? "text-xs font-semibold text-green-500"
                : "text-xs font-semibold text-yellow-500"
            }
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.done ? "DONE" : "TODO"}
          </button>
          <form
            className="w-full"
            action={async (formData) => {
              const text = formData.get("text") as string;
              await editTodo(todo.id, text);
            }}
          >
            <input className="w-full" defaultValue={todo.text} name="text" />
          </form>
          <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}
