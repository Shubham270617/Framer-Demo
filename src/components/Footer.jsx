import FalirSVG from "../assets/falir.svg";

const Footer = () => {
    return (
      <footer className="relative bg-gradient-to-b from-blue-900 to-black text-white py-16 px-6 rounded- w-full min-h-[80vh] flex flex-col justify-end mt-32 rounded-t-3xl">
        {/* Background Large Text */}
        <h1 className="absolute inset-0 flex justify-center items-center text-[25vw] font-bold text-blue-900 opacity-10 leading-none">
          <img src={FalirSVG} alt="" />
        </h1>
  
        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-lg font-semibold text-gray-300">
            The Next-Generation <br />
            <span className="text-white">Business Platform</span>
          </h2>
  
          {/* Social Icons */}
          <div className="mt-6 flex justify-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition">
              📸
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition">
              ❌
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition">
              🎵
            </button>
          </div>
  
          {/* Footer Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-12 text-sm text-gray-400">
            <div>
              <h3 className="text-white font-semibold">SUPPORT</h3>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">NAVIGATION</h3>
              <p>Home</p>
              <p>How it works</p>
              <p>Testimonials</p>
              <p>Features</p>
              <p>Pricing</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">NEWS</h3>
              <p>News</p>
            </div>
          </div>
  
          {/* Copyright & Legal */}
          <div className="mt-12 text-xs text-gray-500">
            © 2025 Toni Järvinen @etonjv
          </div>
          <div className="mt-4 text-xs flex justify-center gap-4">
            <p>Privacy Policy</p>
            <p>Cookies</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  