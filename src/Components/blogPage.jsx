import React, { useState } from "react";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  
const blogPosts = [
  {
    id: 1,
    title: "How I Built My First Full-Stack Web Application",
    date: "December 2025",
    image:photo1,

   
    
    content: "I started with React for the frontend, used Node.js and Express for the backend, and MongoDB for the database. This project taught me how to connect frontend and backend, handle user data, and deploy a web app live.",
  },
  {
    id: 2,
    title: "Learning Coding Independently: My Journey",
    date: "july 2022",
    image: photo2 ,
    
    
    content: "Before attending Nyabiheke Alight Coding School and attending my high shool in Mathematics,Compouter Science and Economics combination, I started learning HTML, CSS, and JavaScript on my own. This experience taught me discipline, problem-solving skills, and the value of self-learning.",
  },
];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          My Blog
        </h1>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer transition duration-300"
              onClick={() => setSelectedPost(post)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-3xl w-full overflow-y-auto max-h-full p-6 relative">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                onClick={() => setSelectedPost(null)}
              >
                &times;
              </button>
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedPost.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{selectedPost.date}</p>
              <p className="text-gray-700 whitespace-pre-line">{selectedPost.content}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
    