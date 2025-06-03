import { User } from "../../../users/page";
import Link from "next/link";

async function fetchUser(id: string): Promise<User> {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  return res.json();
}

type Props = {
  params: { id: string };
};

export default async function UserPreviewModal({ params }: Props) {
  const user = await fetchUser(params.id);

  return (
    <section className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-80 shadow-lg space-y-3">
        <h2 className="text-lg font-semibold">User ID: {user.id}</h2>
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>

        <div className="flex justify-between gap-2 pt-2">
          <Link
            href="/users"
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm"
          >
            Close
          </Link>
          <Link
            href={`/users/${user.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
          >
            Full Info
          </Link>
        </div>
      </div>
    </section>
  );
}
