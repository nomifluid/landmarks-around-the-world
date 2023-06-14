import Link from "next/link";
export default function Header() {
  return (
    <div className="bg-white shadow">
      <nav className="flex flex-row justify-between items-center h-16">
        <Link
          href="/"
          className="text-pink-600 text-sm font-medium transition-colors duration-200 ease-out"
        >
          Slavné památky po celém světě
        </Link>
        <ul className="flex flex-row justify-between items-center space-x-4">
          <li>
            <Link
              href="/"
              className="text-stone-600 hover:text-stone-500 text-sm font-medium transition-colors duration-200 ease-out"
            >
              Úvod
            </Link>
          </li>
          <li>
            <Link
              href="/regions"
              className="text-stone-600 hover:text-stone-500 text-sm font-medium transition-colors duration-200 ease-out"
            >
              Regiony
            </Link>
          </li>
          <li>
            <Link
              href="/landmarks"
              className="text-stone-600 hover:text-stone-500 text-sm font-medium transition-colors duration-200 ease-out"
            >
              Památky
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

{
  /* <nav class="flex flex-wrap items-center justify-between p-4 bg-white">
    <div class="w-auto lg:order-2 lg:w-1/5 lg:text-center">
        <Link class="text-xl font-semibold text-gray-800 font-heading" href="/">
        Slavné památky po celém světě
        </Link>
    </div>
   
    <div class="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
        
    </div>
    <div class="w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
    <Link class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="/">
            Úvod
        </Link>
        <Link class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="/regions">
            Regiony
        </Link>
        <Link class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="/landmarks">
            Památky
        </Link>
    </div>
</nav> */
}
