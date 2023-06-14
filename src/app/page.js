import data from "./data.json";
import Link from "next/link";

export default function Home() {
  const regions = data.regions
    .slice(0, 3)
    .map((region) => ({ ...region, id: encodeURIComponent(region.name) }));

  return (
    <div>
      <div class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center shadow">
        <main>
          <div class="w-full py-12">
            <h2>Objevte slavné památky po celém světě</h2>
            <p>
              Vítejte na našem webu, který je věnován historickým památkám a
              turistickým atrakcím po celé Evropě. Pokud máte rádi
              dobrodružství, vášeň pro historii a touhu po poznávání kulturního
              dědictví, jste na správném místě. Připravte se na neuvěřitelné
              cestování zeměmi, překročte hranice a prozkoumejte úchvatné místa,
              která zanechala minulost.
            </p>
            <div class="lg:mt-0 lg:flex-shrink-0">
              <div class="mt-8 inline-flex rounded-lg shadow">
                <Link
                  href="/regions"
                  class="py-2 px-4 rounded-lg bg-pink-600 hover:bg-pink-500 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Nechte se inspirovat
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>

      <main className="my-4">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 mt-12">
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

        <section class="sm:rounded-lg shadow mt-12 max-w-screen-xl px-4 py-12 mx-auto bg-green-500 dark:bg-gray-800 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div class="max-w-4xl mx-auto text-center">
            <h3 class="text-white">
              Nejrozsáhlejší kolekce historických památek Evropy na jednom místě
            </h3>
            <p class="text-white">
              Pokud hledáte komplexní a vyčerpávající zdroj informací o
              historických památkách Evropy, jste na správném místě. Naši
              vášniví výzkumníci a cestovatelé se snažili vytvořit
              nejrozsáhlejší kolekci památek, která vám umožní prozkoumat a
              pochopit bohaté kulturní dědictví této úžasné části světa.
              Nezáleží na tom, zda máte rádi architekturu, archeologii nebo
              historii - naše stránky vám poskytnou informace o nejvýznamnějších
              památkách z různých období a regionů Evropy. Od antických římských
              ruin po středověké hrady a renesanční paláce - zde najdete vše, co
              potřebujete k tomu, abyste si plně užili své cestování do
              minulosti. Připravte se na vzrušující putování historií a
              objevujte tajemství, která tyto památky ukrývají.
            </p>
          </div>
          <div class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div>
              <p class="text-5xl font-extrabold leading-none text-white">90</p>
              <p class="mt-2 text-base font-medium leading-6 text-white">
                památek
              </p>
            </div>
            <div class="mt-10 sm:mt-0">
              <p class="text-5xl font-extrabold leading-none text-white">10</p>
              <p class="mt-2 text-base font-medium leading-6 text-white">
                regionů
              </p>
            </div>
            <div class="mt-10 sm:mt-0">
              <p class="text-5xl font-extrabold leading-none text-white">7</p>
              <p class="mt-2 text-base font-medium leading-6 text-white">
                zemí
              </p>
            </div>
          </div>
        </section>

        <div class="sm:rounded-lg shadow bg-white my-12">
          <div class="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
            <h3>
              Projděte si všechny historické památky Evropy na jednom místě
            </h3>
            <p class="my-6 max-w-xl">
              Nechte se unést do světa dávných civilizací, úchvatné architektury
              a bohatého kulturního dědictví. Od nádherných gotických katedrál
              po starobylé památky z římských dob - máme pro vás všechny tyto
              poklady na jednom místě.
            </p>
            <Link
              href="/landmarks"
              className="text-pink-600 group-hover/item:text-pink-500 justify-self-end"
            >
              Zobrazit všechny památky →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
