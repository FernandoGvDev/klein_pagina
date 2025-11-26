export const Footer = () => (
  <footer className="bg-neutral-900 text-neutral-400">
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Top row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-sm md:text-base">
          © {new Date().getFullYear()} Pintor Empresário
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
