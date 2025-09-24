export default function PopularMetrics() {
  const metrics = [
    { value: 250, label: "Square meters" },
    { value: 5, label: "Bedrooms" },
    { value: 3, label: "Floors" },
    { value: 2, label: "Bathrooms" },
  ];

  return (
    <section className="bg-white py-20 px-6" id="metrics">
      <div className="max-w-7xl mx-auto">
        {/* Left header */}
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
          Houses
        </p>
<div className="text-center">
        {/* Main Title */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Most popular metrics
        </h2>

        {/* Subtext */}
        <p className="text-gray-700 mb-12 text-sm">
          Our clients are mainly looking for these specifics:
        </p>
</div>
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8  py-10">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center border-gray-200  border-b "
            >
              <p className="text-5xl font-semibold text-gray-900">{metric.value}</p>
              <p className="text-sm text-gray-600 mt-2">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
