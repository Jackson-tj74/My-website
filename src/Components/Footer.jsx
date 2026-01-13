function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
      
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        
        <div>
          <h2 className="text-3xl font-bold mb-2">
            Let’s create something great
          </h2>
          <p className="text-blue-100">
            I’m always open to learning, collaboration, and new opportunities.
          </p>
        </div>

        
        <div className="md:text-right">
          <h3 className="text-lg font-semibold mb-2">
            Contact me
          </h3>
          <a
            href="mailto:tuyikundejackson74@gmail.com"
            className="font-bold hover:text-yellow-300 transition"
          >
            tuyikundejackson74@gmail.com
          </a>
        </div>

      </div>

      
      <div className="text-center text-sm text-blue-200 py-4 border-t border-blue-500">
        © {new Date().getFullYear()} Jackson. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;


