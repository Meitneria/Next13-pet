import { Todo } from "../../../typings";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  const todo: Todo = await res.json();
  return todo;
};

const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId);
  if (!todo.id) return notFound();
  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        # {todoId}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
};

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();

  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map((todo) => ({ todoId: todo.userId.toString() }));
}
