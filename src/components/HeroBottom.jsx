
import { HeartPulse, Square, CalendarDays } from "lucide-react"; 

const features = [
  {
    icon: <HeartPulse className="w-8 h-8 text-green-500" />,
    title: "Custom Web Development",
    description:
      "We build fast, secure, and scalable websites tailored to your business needs using modern technologies.",
  },
  {
    icon: <Square className="w-8 h-8 text-green-500" />,
    title: "Creative UI/UX Design",
    description:
      "Our designers craft intuitive and engaging interfaces that deliver a seamless user experience.",
  },
  {
    icon: <CalendarDays className="w-8 h-8 text-green-500" />,
    title: "SEO & Performance Optimization",
    description:
      "Boost your search rankings and site speed with our expert SEO strategies and performance tuning.",
  },
];

const HeroBottom = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-6 md:px-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 sm:p-8 flex flex-col space-y-4 shadow-sm hover:shadow-md transition duration-300 transform hover:scale-105 cursor-pointer group rounded-lg"
          >
            {feature.icon}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 group-hover:text-green-500 transition duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroBottom;
