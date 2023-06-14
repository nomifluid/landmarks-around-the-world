"use client";

import { useRouter, redirect } from "next/navigation";
import Link from "next/link";
import data from "../../data.json";

export default function Landmark({ params }) {
  const router = useRouter();
  const landmark = data.landmarks.find(
    ({ name }) => name === decodeURIComponent(params.landmark)
  );
  if (!landmark) return redirect("/not-found");

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
              <span class="block">{landmark.name},</span>{" "}
              <span class="block text-pink-500">{landmark.city}</span>
            </h2>
            <p>{landmark.desc}</p>
          </div>
          <div className="px-6 sm:px-12 lg:p-0 xl:p-12">
            <img src="https://images.unsplash.com/photo-1570939274717-7eda259b50ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" />
          </div>
        </div>
        <div class="max-w-2xl overflow-hidden bg-white my-4">
          <div>
            <dl>
              <div class="px-4 py-4 bg-stone-50 hover:bg-stone-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium leading-6 text-stone-900">
                  Město
                </dt>
                <dd class="mt-1 text-sm text-stone-900 sm:mt-0 sm:col-span-2">
                  {landmark.city}
                </dd>
              </div>
              <div class="px-4 py-4 bg-white hover:bg-stone-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium leading-6 text-stone-900">
                  Region
                </dt>
                <dd class="mt-1 text-sm text-stone-900 sm:mt-0 sm:col-span-2">
                  {landmark.region}
                </dd>
              </div>
              <div class="px-4 py-4 bg-stone-50 hover:bg-stone-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium leading-6 text-stone-900">
                  Rok výstavby
                </dt>
                <dd class="mt-1 text-sm text-stone-900 sm:mt-0 sm:col-span-2">
                  {landmark.year}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
    </div>
  );
}
