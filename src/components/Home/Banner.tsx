import Link from "next/link";
import bannr from "../../assets/meeting.jpg"; // Consider replacing with a relevant gardening image
import Image from "next/image";


const Banner = () => {
  return (
    <div className="relative w-full h-60 md:h-80 lg:h-96">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* <img
          src={bannr} 
          alt="Beautiful Garden"
          className="object-cover w-full h-full"
        /> */}
        <Image src={bannr}   width={0}
  height={0}
  className="object-cover w-full h-full" alt="banner"/>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-center p-6">
        <div className="text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Grow Your Garden with Expert Tips!
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Discover the best gardening practices for every season.
          </p>
          <Link href={'/tips'} className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
            Explore Tips
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
