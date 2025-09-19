import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold text-blue-400 hover:text-blue-300 transition-colors">
          SportsHub
        </Link>
        <nav>
          <ul className="flex space-x-6 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Scores
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/store" className="hover:text-blue-400 transition-colors">
                Store
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
