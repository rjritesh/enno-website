import HeroBottom from "./HeroBottom";
import Navbar from "./Navbar";
import heroImg from "/hero-img.png"; 

const Body = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 sm:px-8 md:px-12 lg:px-24 py-12 md:py-20">

          <div className="md:w-1/2 flex flex-col items-start justify-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-500 leading-snug">
              Elegant and creative <br /> solutions
            </h1>
            <p className="text-gray-500 text-base sm:text-lg md:text-lg">
              We are a team of talented designers making websites with Bootstrap
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition duration-200 cursor-pointer w-full sm:w-auto text-center">
                Get Started
              </button>
              <button className="flex items-center space-x-2 text-gray-800 font-medium hover:text-green-500 transition duration-200">
                <span className="w-8 h-8 flex items-center justify-center border-2 border-green-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 4l10 6-10 6V4z" />
                  </svg>
                </span>
                <span className="cursor-pointer">Watch Video</span>
              </button>
            </div>
          </div>

 
          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
            <img
              src={heroImg}
              alt="Hero Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>

     
        <HeroBottom />
      </section>
    </>
  );
};

export default Body;
