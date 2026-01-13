
function CertificateCard({ title, img }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-white/30 backdrop-blur-md border border-white/20 hover:scale-105 transition duration-300">
      
      
      <img
        src={img}
        alt={title}
        className="w-full h-56 object-cover"
      />

      
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
        <p className="text-white font-semibold text-lg text-center px-4">
          {title}
        </p>
      </div>
    </div>
  );
}

export default CertificateCard;


