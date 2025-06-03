import { User } from "../page";

type Props = {
  params: { id: string };
};

export default async function UserDetailPage({ params }: Props) {
  const res = await fetch(`https://dummyjson.com/users/${params.id}`);
  const data: User = await res.json();

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center space-y-4">
        <h1 className="text-3xl font-bold text-indigo-700">
          {data.firstName} {data.lastName}
        </h1>
        <p className="text-gray-600 text-lg">
          <span className="font-semibold">Age:</span> {data.age}
        </p>
        <p className="text-gray-600 text-lg">
          <span className="font-semibold">Gender:</span> {data.gender}
        </p>
        <p className="text-gray-600 text-lg">
          <span className="font-semibold">Email:</span> {data.email}
        </p>
      </div>
    </main>
  );
}
