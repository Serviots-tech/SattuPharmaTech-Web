import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="pt-10 pb-2 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full mx-auto">
      <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 md:gap-10">
        <div className="max-w-xl flex-1">
          <div className="flex items-center mb-4">
            <Image
              src="/assets/Logo.png"
              width={300}
              height={300}
              alt="Logo"
              unoptimized={true}
            />
          </div>
          <p className=" text-sm leading-relaxed font-poppins font-light mt-5">
            Satu PharmTech helps Indian and African pharma businesses expand by managing distribution, compliance, and market entry while delivering innovative tech solutions for growth.
          </p>
        </div>

        {/* <div className="flex-2 gap-12">
          <div>
            <Link href="/about">
              <h2 className="text-gray-800 mb-2 font-poppins font-normal">About Us</h2>
            </Link>
            <ul className="space-y-1 text-sm">
              <li className="text-gray-600 font-poppins font-light">Team Members</li>
              <li className="text-gray-600 font-poppins font-light">Directors</li>
              <li className="text-gray-600 font-poppins font-light">Doctors</li>
            </ul>
          </div>

          <div className="mt-5">
            <h2 className="text-gray-800 mb-2 font-poppins font-normal">Our Services</h2>
            <ul className="space-y-1 text-sm">
              <Link href="/pharmaservices">
                <li className="text-gray-600 font-poppins font-light">Pharma Services</li>
              </Link>
              <Link href="/softwareservices">
                <li className="text-gray-600 font-poppins font-light">IT Services</li>
              </Link>
            </ul>
          </div>
        </div> */}

        <div className="flex-2">
          <h2 className="text-gray-800 mb-2 font-poppins font-normal">Contact Us</h2>

          <div className="space-y-10">
            <div className="flex flex-col lg:flex-row gap-6">
              <div>
                <p className="font-poppins">
                  <span className="text-gray-600 font-poppins font-normal">Trusha Gandhi</span>
                  <span className="text-gray-600 italic ml-2 font-light">- (Founder)</span>
                </p>
                <p className="text-gray-600 font-poppins font-light"><a href="tel:+918980161651">+91 8980161651</a></p>
              </div>

              <div>
                <p className="font-poppins">
                  <span className="font-poppins text-gray-600 font-normal">Akshat Gandhi</span>
                  <span className="text-gray-600 italic ml-2 font-poppins font-light">- (Co-Founder)</span>
                </p>
                <p className="font-poppins text-gray-600 font-light"><a href="tel:+919099019848">+91 9099019848</a></p>
              </div>
              <div>
              <p className="font-poppins">
                <span className="font-poppins text-gray-600 font-normal">Saurabh Nayak</span>
                <span className="font-poppins text-gray-600 font-light italic ml-2">- Director (Operations)</span>
              </p>
              <p className="font-poppins text-gray-600 font-light"> <a href="tel:+919426311821">+91 9426311821</a></p>
            </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 mt-6">
              <div>
                <p className="font-poppins mb-2">
                  <span className="text-gray-800 mb-2 font-poppins font-normal">Email:</span>
                </p>
                <p className="font-poppins text-gray-600 font-light underline">
                  <a href="mailto:info@satupharmtech.com">info@satupharmtech.com</a>
                </p>

                <p className="font-poppins text-gray-600 font-light underline">
                  <a href="mailto:business@satupharmtech.com">business@satupharmtech.com</a>
                </p>
              </div>
              <div>
                <p className="font-poppins mb-2">
                  <span className="text-gray-800 mb-2 font-poppins font-normal">Address:</span>
                </p>
                <p className="font-poppins text-gray-600 font-light max-w-sm">
                  49-Cosmovilla, Opp. Satyagrah Chavni, Near Amul Garden, Bodakdev, Ahmedabad-380054, Gujarat, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-4 border-t border-gray-200 text-center">
        <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-600">
          <span className="cursor-pointer hover:text-gray-800 font-poppins font-light">Privacy Policy</span>
          <span className="cursor-pointer hover:text-gray-800 font-poppins font-light">Terms of Services</span>
        </div>
      </div>
    </div>
  );
}
