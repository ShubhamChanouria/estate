export default function AboveTheFold() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/hero.png"          
        alt="Apartment interior"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Title */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white font-bold  text-5xl sm:text-6xl md:text-7xl text-center">
          Rad Apartments
        </h1>
      </div>
    </section>
  );
}
