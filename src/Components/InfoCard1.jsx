import crfc1 from "../assets/crfc1.jpg";
import crfc2 from "../assets/crfc2.jpg";
import CertificateCard from "./CertificateCard";

function InfoCard1() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      
      
      <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-4">
        My Certificates
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Some of the achievements I have earned through learning and practice
      </p>

      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <CertificateCard
          title="Practical English Certificate"
          img={crfc1}
        />

        <CertificateCard
          title="English Vocabulary Certificate"
          img={crfc2}
        />

        <CertificateCard
          title="Wavumbuzi Entrepreneurship Certificate"
          img={crfc1}
        />

      </div>
    </section>
  );
}

export default InfoCard1;

