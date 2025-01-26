import Link from 'next/link';

function Header() {
  return (
    <div className="w-full h-20 bg-white">
      <div className="flex justify-between items-center h-full px-8">
        <div className="text-xl font-bold">Logo</div>
        <nav className="flex space-x-8">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-500">
            About
          </Link>
          <Link href="/contact" className="hover:text-red-500">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
