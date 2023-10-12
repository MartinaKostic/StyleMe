import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-pink p-4 text-center bottom-0 w-full">
        <div className="flex justify-between h-full text-2xl">
          <div className="basis-60 flex justify-start"> styleme</div>
          <div className="flex flex-col items-center">
            <div className="mb-3">Follow us:</div>
            <div className="flex flex-row mt-3">
              <div className="p-2">
                <FaFacebookSquare />
              </div>
              <div className="p-2">
                <FaInstagram />
              </div>
              <div className="p-2">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="basis-60">
            Contact us:
            <ul className="text-base">
              <li>styleme@gmail.com</li>
              <li>+385971885992</li>
              <li>Ul. Ruđera Boškovića 32</li>
              <li> 21000 Split</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
