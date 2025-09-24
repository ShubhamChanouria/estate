export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-[30%_70%]">
        <div>
        {/* Small heading */}
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
          About
        </p>
</div>
<div>
        {/* Main heading */}
        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 max-w-2xl mb-10">
          The best place to find the best housing
          in your city—we are the best in the market
        </h2>

        {/* Two columns of text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 text-[15px] leading-relaxed">
          <p>
            Whether you're looking for a cozy apartment in the city or a sprawling estate in the countryside,
            we're here to guide you every step of the way.
          </p>
          <p>
            We pride ourselves on our commitment to excellence and our personalized approach to client service.
            When you work with us, you can trust that we'll go above and beyond to make sure you're completely
            satisfied with your real estate experience.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
