
import Image from "next/image";

export default function Footer() {
  return (

    <div className="pt-10 pb-2 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-0 w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
        <div className="max-w-xl ">
          <div className="flex items-center mb-4">
            <Image
              src="/assets/BrandLogo.png"
              className="mr-2 h-12"
              width={150}
              height={100}
              alt="Logo"
              unoptimized={true}
            />
          </div>
          <p className="text-gray-700 text-sm leading-relaxed font-poppins font-light">
            Satu PharmTech helps Indian and African pharma businesses expand by managing distribution, compliance, and market entry while delivering innovative tech solutions for growth.
          </p>
        </div>

        {/* Right side - Navigation and Contact */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* About Us Section */}
          <div>
            <h2 className=" text-gray-800 mb-2 font-poppins font-normal">About Us</h2>
            <ul className="space-y-1 text-sm">
              <li className="text-gray-600 font-poppins font-light">Team Members</li>
              <li className="text-gray-600 font-poppins font-light">Directors</li>
              <li className="text-gray-600 font-poppins font-light">Doctors</li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h2 className=" text-gray-800 mb-2 font-poppins font-normal">Our Services</h2>
            <ul className="space-y-1 text-sm">
              <li className="text-gray-600 font-poppins font-light">Pharma Services</li>
              <li className="text-gray-600 font-poppins font-light">IT Services</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className=" text-gray-800 mb-2 font-poppins font-normal">Contact Us</h2>
            <ul className="space-y-1 text-sm">
              <li className="flex">
                <span className="w-20 text-gray-600 font-poppins font-light">Phone:</span>
                <span className="text-gray-800 font-poppins font-light">+91 1234567890</span>
              </li>
              <li className="flex">
                <span className="w-20 text-gray-600 font-poppins font-light">Email:</span>
                <span className="text-gray-800 font-poppins font-light">example@gmail.com</span>
              </li>
              <li className="flex">
                <span className="w-20 text-gray-600 font-poppins font-light">Location:</span>
                <span className="text-gray-800 font-poppins font-light">Full Address here</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-4 border-t border-gray-200">
        <div className="flex space-x-6 text-sm text-gray-600">
          <span className="cursor-pointer hover:text-gray-800 font-poppins font-light">Privacy Policy</span>
          <span className="cursor-pointer hover:text-gray-800 font-poppins font-light">Terms of Services</span>
        </div>
      </div>
    </div>
  );
}
