import Link from "next/link";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://dummyjson.com/users", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data.users;
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-sky-100 to-indigo-100">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-2">User Directory</h1>
        <p className="text-center text-gray-600 mb-6">
          Explore a list of all available users. Click on a name to see more details.
        </p>

        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="text-center">
              <Link
                href={`/users/${user.id}`}
                className="text-indigo-600 hover:text-indigo-800 font-medium text-lg transition"
              >
                {user.firstName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
