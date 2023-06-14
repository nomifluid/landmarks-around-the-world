import data from "../data.json";
import Link from "next/link";
export default function Landmarks() {
  const landmarks = data.landmarks.map((landmark) => ({
    ...landmark,
    id: encodeURIComponent(landmark.name),
  }));
  return (
    <div>
      <header class="bg-white shadow">
        <div class="content py-6">
          <h1 class="text-3xl font-bold">Památky</h1>
        </div>
      </header>
      <main className="my-4">
        <table className="bg-white shadow w-full sm:rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-4 pl-4 sm:pl-6 text-sm font-medium leading-6 text-gray-900 text-left">
                Památka
              </th>
              <th className="py-4 text-sm font-medium leading-6 text-gray-900 text-left">
                Region
              </th>
              <th className="py-4 pr-4 sm:pr-6 text-sm font-medium leading-6 text-gray-900 text-left">
                Rok výstavby
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {landmarks.map((landmark) => (
              <tr className="group/row hover:bg-stone-50">
                <td className="py-4 pl-4 sm:pl-6">
                  <Link
                    href={"/landmarks/" + landmark.id}
                    className="text-pink-600 hover:text-pink-500"
                  >
                    {landmark.name}
                  </Link>
                </td>
                <td className="py-4">
                  {landmark.city}, {landmark.region}
                </td>
                <td className="py-4 pr-4 sm:pr-6">{landmark.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
