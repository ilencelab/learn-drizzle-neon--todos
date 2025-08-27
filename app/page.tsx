import { AddTodoForm } from "@/components/add-todo-form";
import { TodoList } from "@/components/todo-list";
import { getTodos } from "@/lib/db";

export default async function Page() {
  const todos = await getTodos();

  return (
    <div className="max-w-xl mx-auto">
      <h1>Todos</h1>
      <AddTodoForm />
      <TodoList todos={todos} />
    </div>
  );
}
