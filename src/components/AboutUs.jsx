import { MoveRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-16">

  
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-500">ABOUT</h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Transforming Ideas into Digital Solutions
        </p>
      </div>


      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 mb-12">
 
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="/about.png"
            alt="Team Illustration"
            className="w-full max-w-md"
          />
        </div>


        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-gray-800 mb-4 text-center md:text-left text-sm sm:text-base">
            At eNno, we are a passionate team of designers, developers, and innovators committed to delivering outstanding digital solutions. Our goal is to help businesses grow through creative and effective technology.
          </p>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            We deliver top-notch web and mobile applications that meet client needs.
          </p>
          <ul className="space-y-2 mb-4 text-gray-800">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold"><MoveRight /></span>
              Our projects are designed with scalability, security, and user experience in mind.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold"><MoveRight /></span>
              We believe in continuous learning and adopting the latest technologies to stay ahead.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold"><MoveRight /></span>
              Our team works closely with clients to understand their vision and turn it into a reality.
            </li>
          </ul>
          <p className="text-gray-800 text-sm sm:text-base">
            With a focus on collaboration, innovation, and quality, eNno is your trusted partner for digital transformation.
          </p>
        </div>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-4xl sm:text-5xl font-bold text-green-500">232</p>
          <p className="text-gray-600 text-sm sm:text-base">Clients</p>
        </div>
        <div>
          <p className="text-4xl sm:text-5xl font-bold text-green-500">521</p>
          <p className="text-gray-600 text-sm sm:text-base">Projects</p>
        </div>
        <div>
          <p className="text-4xl sm:text-5xl font-bold text-green-500">1453</p>
          <p className="text-gray-600 text-sm sm:text-base">Hours Of Support</p>
        </div>
        <div>
          <p className="text-4xl sm:text-5xl font-bold text-green-500">32</p>
          <p className="text-gray-600 text-sm sm:text-base">Workers</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
