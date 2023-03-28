import Link from "next/link";

const Header = () => (
  <header className="p-5 bg-blue-500">
    <p className="font-bold text-white pb-2">I am the header</p>
    <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
      Home
    </Link>
  </header>
);

export default Header;
