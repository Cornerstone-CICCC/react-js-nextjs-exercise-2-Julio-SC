import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-indigo-600 text-white py-4 shadow-md">
      <nav className="max-w-4xl mx-auto flex justify-center gap-12 text-lg font-medium">
        <Link
          href="/"
          className="hover:text-indigo-200 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/users"
          className="hover:text-indigo-200 transition-colors duration-200"
        >
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
