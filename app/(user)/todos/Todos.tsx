import Link from "next/link";
import { Todo } from "../../typings";

// it is a server component

const fetchTodos = async () => {
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  return todos;
};

// now we can perform api calls on a high level
async function TodosList() {
  const todos = await fetchTodos();

  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </div>
  );
}

export default TodosList;
