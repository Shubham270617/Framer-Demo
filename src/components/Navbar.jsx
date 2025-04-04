
import FalirSVG from "../assets/falir.svg"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-b from-blue-300 to-white">
      <div className="text-2xl font-bold text-gray-800">
        <img src={FalirSVG} alt="" className="h-8 cursor-pointer"/>
      </div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#how-it-works" className="hover:text-black">How it works</a></li>
        <li><a href="#testimonials" className="hover:text-black">Testimonials</a></li>
        <li><a href="#pricing" className="hover:text-black">Pricing</a></li>
        <li><a href="#features" className="hover:text-black">Features</a></li>
        <li><a href="#faq" className="hover:text-black">FAQ</a></li>
        <li><a href="#blog" className="hover:text-black">Blog</a></li>
      </ul>
      <a href="#get-started" className="bg-black text-white px-4 py-2 rounded-full">Get started</a>
    </nav>
  );
};

export default Navbar;