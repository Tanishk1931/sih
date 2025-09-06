// src/components/PlanYourTrip.tsx
import { Link } from "react-router-dom";

const places = [
  {
    name: "Zuluk",
    image: "/images/zuluk.jpg",
    link: "/zuluk",
  },
  {
    name: "Nathula",
    image: "/images/nathula.jpg",
    link: "/nathula",
  },
  {
    name: "Gurudongmar Lake",
    image: "/images/gurudongmar.jpg",
    link: "/gurudongmar-lake",
  },
  {
    name: "Namchi",
    image: "/images/namchi.jpg",
    link: "/namchi",
  },
  {
    name: "Rabdentse Ruins",
    image: "/images/rabdentse.jpg",
    link: "/rabdentse-ruins",
  },
  {
    name: "Tathagatal Tsal",
    image: "/images/tathagatal.jpg",
    link: "/tathagatal-tsal",
  },
];

export default function PlanYourTrip() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/your-background.jpg')" }} // replace with your background image
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 p-8 md:p-16">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-8">
          Plan your trip
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {places.map((place) => (
            <Link
              key={place.name}
              to={place.link}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover group-hover:opacity-90"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {place.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
