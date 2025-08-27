import { AddTodoForm } from "@/components/add-todo-form";
import DashboardHeader from "@/components/dashboard-header";
import { TodoList } from "@/components/todo-list";
import { getCurrentUser } from "@/lib/auth";
import { getTodos } from "@/lib/db";

export default async function Page() {
  const user = await getCurrentUser();
  const todos = await getTodos(user.id);

  return (
    <>
      <DashboardHeader />
      <div className="py-6">
        <AddTodoForm userId={user.id} />
      </div>
      <TodoList todos={todos} />
    </>
  );
}
