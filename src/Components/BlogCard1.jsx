
import pic1 from "../assets/pic1.jpg";

function BlogCard1() {
  return (
    <>
      
      <section className="bg-gradient-to-br from-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          
          <div>
            <p className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
              I’m Jackson
            </p>
            <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
              Freelance Designer & Developer
            </p>
            <p className="text-gray-600 max-w-md">
              I design and build clean, modern websites and applications with a focus on user experience and performance.
            </p>
          </div>

          
          <div className="flex justify-center">
            <img
              src={pic1}
              alt="Jackson"
              className="w-80 md:w-96 rounded-3xl shadow-xl object-cover"
            />
          </div>

        </div>
      </section>


    </>
  );
}

export default BlogCard1;
