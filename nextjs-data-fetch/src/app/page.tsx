import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-200 flex items-center justify-center p-8">
      <main className="bg-white rounded-xl shadow-lg p-10 max-w-lg w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-indigo-700">Welcome</h1>
        <p className="text-gray-600">
          This is my homepage built with Next.js and Tailwind CSS.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            href="/users"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            View Users
          </Link>
          <Link
            href="/"
            className="text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50 transition"
          >
            Home
          </Link>
        </div>
      </main>
    </div>
  );
}
