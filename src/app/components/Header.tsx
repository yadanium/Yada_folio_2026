import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-block">
            <img src="/images/common/logo.png" alt="Yada folio" className="h-8" />
          </Link>
          
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link to="/" className="text-gray-700 hover:text-[#0BA29A] transition-colors font-bold">
                  Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-[#0BA29A] transition-colors font-bold">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}