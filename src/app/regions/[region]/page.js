"use client";

import { useRouter, redirect } from "next/navigation";
import Link from "next/link";
import data from "../../data.json";

export default function Region({ params }) {
  const router = useRouter();
  const region = data.regions.find(
    ({ name }) => name === decodeURIComponent(params.region)
  );
  if (!region) return redirect("/not-found");
  const landmarks = data.landmarks
    .filter((landmark) => landmark.region === region.name)
    .map((landmark) => ({
      ...landmark,
      id: encodeURIComponent(landmark.name),
    }));
  return (
    <div>
      <main className="my-4 bg-white shadow sm:rounded-lg overflow-hidden">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div class="text-start pt-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <Link
              href="#"
              className="text-pink-600 group-hover/item:text-pink-500 justify-self-end"
              onClick={() => router.back()}
            >
              ← Zpět
            </Link>
            <h2 className="mt-6">
              <span class="block">{region.name},</span>{" "}
              <span class="block text-pink-500">{region.country}</span>
            </h2>
            <p>{region.desc}</p>
          </div>
          <div className="px-6 sm:px-12 lg:p-0 xl:p-12">
            <img src="https://images.unsplash.com/photo-1570939274717-7eda259b50ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" />
          </div>
        </div>

        <table className="w-full overflow-hidden my-4">
          <thead>
            <tr>
              <th className="py-4 pl-4 sm:pl-6 text-sm font-medium leading-6 text-gray-900 text-left">
                Památka
              </th>
              <th className="py-4 text-sm font-medium leading-6 text-gray-900 text-left">
                Město
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
                <td className="py-4">{landmark.city}</td>
                <td className="py-4 pr-4 sm:pr-6">{landmark.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
