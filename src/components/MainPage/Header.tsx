import Link from 'next/link';

function Header() {
  return (
    <div className="w-full h-20 bg-gray-200">
      <div className="flex justify-between items-center h-full px-8">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>
        <nav className="flex space-x-8">
          <Link href="/" className="hover:text-red-500 font-bold">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-500 font-bold">
            About
          </Link>
          <Link href="/contact" className="hover:text-red-500 font-bold">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
