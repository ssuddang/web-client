function Footer() {
  return (
    <footer className="bg-green-700 text-white">
      <div>
        <div className="flex justify-center space-x-8 pt-6">
          <a href="#" className="bg-white text-black p-3 rounded-full">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="bg-white text-black p-3 rounded-full">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="bg-white text-black p-3 rounded-full">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <nav className="">
          <ul className="flex justify-center space-x-4 pt-6 pb-5">
            <li>
              <a href="#" className="hover:opacity-100 opacity-70">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-100 opacity-70">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-100 opacity-70">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-green-800 text-center py-4">
        <p className="text-sm">&copy; 2025 SSUDDANG. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
