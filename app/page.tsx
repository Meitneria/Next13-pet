import { Suspense } from "react";
import Search from "./(user)/search/Search";
import TodosList from "./(user)/todos/Todos";

const Home = () => (
  <div>
    <Search />
    <Suspense fallback={<p > Loading the TODOs...</p>}>
      <h1>Loaded TODOs</h1>
      <div className="flex space-x-2">
        {/** @ts-ignore */}
        <TodosList />
      </div>
    </Suspense>
  </div>
);

export default Home;
