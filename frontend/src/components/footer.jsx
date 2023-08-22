import logo from "./../images/logo1.png";
import { Input } from "@mui/base/Input";
export const Footer = () => {
  return (
    <div className="h-[200px] bg-[#14274A] grid grid-cols-4 gap-4 px-20 py-10 place-items-center text-background">
      <div>
        <img src={logo} alt="logo" width={150} height={45} />
        <p>123 Main Street, London, United Kingdom</p>
        <p>+91 123142352</p>
        <p>royalgarden@gmail.com</p>
      </div>

      <ul className="list-none flex flex-col justify-between h-full">
        <li>About us</li>
        <li>Contact</li>
        <li>Terms and Conditions</li>
      </ul>
      <ul className="list-none flex flex-col justify-between h-full">
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
      <div>
        <p>Subscribe to our newsletter</p>
        <Input placeholder="Email" className="mt-3" />
      </div>
    </div>
  );
};
