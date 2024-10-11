import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt , FaInstagram , FaFacebook ,  FaTiktok } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">

        <div>
          <h3 className="text-xl font-semibold mb-4">WATCH SHOP</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Shop All
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Men Watches
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Ladies Watches
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Terms of Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">CUSTOMER CARE</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Return & Exchange Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Retail Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Warranty Information
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Shipping Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Modes of Payment
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">CONTACT</h3>
          <div className="space-y-2">
            <span className="flex items-center">
              <FaLocationDot className="mr-2 text-xl" /> 250 ABC, Karachi
            </span>
            <span className="flex items-center">
              <FaPhoneAlt className="mr-2 text-xl" /> +92 333 0000
            </span>
            <span className="flex items-center">
              <IoMdMail className="mr-2 text-xl" /> watch@gmail.com
            </span>
          </div>
        </div>
        <div>
            <h3 className="text-xl font-semibold mb-4">SOCIAL</h3>
            <div className="flex gap-4 text-2xl cursor-pointer"><FaInstagram/> <FaFacebook/> <FaTiktok /> </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
