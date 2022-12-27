import { Suspense } from "react";
import TodosList from "./(user)/todos/Todos";

const Home = () => (
  <div>
    <Suspense fallback={<p > Loading the TODOs...</p>}>
      <h1>Loading TODOs</h1>
      <div className="flex space-x-2">
        {/** @ts-ignore */}
        <TodosList />
      </div>
    </Suspense>

    <Suspense fallback={<p>Loading the TODOs...</p>}>
      <h1>Loading TODOs</h1>
      <div className="flex space-x-2">
        {/** @ts-ignore */}
        <TodosList />
      </div>
    </Suspense>
  </div>
);

export default Home;
