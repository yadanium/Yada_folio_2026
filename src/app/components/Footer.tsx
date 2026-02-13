export function Footer() {
  return (
    <footer className="bg-[#0BA29A] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Yada folio. All rights reserved.
        </p>
        <p className="text-center text-sm text-white/90 mt-2">
          Photo by waarrk, tueks
        </p>
      </div>
    </footer>
  );
}
