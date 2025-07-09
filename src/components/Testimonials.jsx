import { useSelector } from 'react-redux';

const testimonials = [
  {
    name: "Suresh L.",
    role: "Luxury Enthusiast",
    quote: "TimeFlow watches are a perfect blend of elegance and precision. I wear mine with pride every day.",
    image: "https://i.pravatar.cc/100?img=7",
  },
  {
    name: "Daniel R.",
    role: "Watch Collector",
    quote: "The craftsmanship is unmatched. TimeFlow has redefined modern watchmaking.",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Aarav K.",
    role: "Entrepreneur",
    quote: "Wearing a TimeFlow watch is more than a statement — it's a mindset. Absolutely love it.",
    image: "https://i.pravatar.cc/100?img=22",
  },
];

export default function Testimonials() {
  const isDark = useSelector((state) => state.darkMode);

  return (
    <section
      className={`py-20 px-4 transition-colors duration-300 ${
        isDark ? '' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold mb-12 tracking-tight ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}
        >
          What Our Customers Say
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-xl shadow-md p-6 transition hover:shadow-lg ${
                isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-700'
              }`}
            >
              <p className="italic mb-6">“{t.quote}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p
                    className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
