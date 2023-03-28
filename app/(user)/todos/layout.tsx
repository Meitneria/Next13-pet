import { PropsWithChildren } from "react";
import Todos from "./Todos";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex">
      <div className="flex-1">
        {/** @ts-ignore */}
        <Todos />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
