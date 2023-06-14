import Link from "next/link";
import data from "../data.json";
export default function Regions() {
  const regions = data.regions.map((region) => ({
    ...region,
    id: encodeURIComponent(region.name),
  }));
  return (
    <div>
      <header class="bg-white shadow mb-4">
        <div class="content py-6">
          <h1 class="text-3xl font-bold">Regiony</h1>
        </div>
      </header>
      <main className="my-4">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {regions.map((region) => (
            <div class="m-auto overflow-hidden rounded-lg shadow h-full bg-white group/item">
              <Link
                href={"/regions/" + region.id}
                class="block w-full h-full flex flex-col justify-between"
              >
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1570939274717-7eda259b50ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
                    class="object-cover object-bottom w-full max-h-40"
                  />
                  <div class="w-full p-4">
                    <h3 className="text-pink-600 group-hover/item:text-pink-500">
                      {region.name}, {region.country}
                    </h3>
                    <p className="text-stone-600 group-hover/item:text-stone-500">
                      {region.desc}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <Link
                    href={"/regions/" + region.id}
                    className="text-pink-600 group-hover/item:text-pink-500 justify-self-end"
                  >
                    Prozkoumat →
                  </Link>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
