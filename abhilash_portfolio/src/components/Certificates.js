import { useState } from "react";
import "../styles/certificates.css";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    { id: 1, src: "/cert1.jpg", alt: "Certificate 1" },
    { id: 2, src: "/cert2.jpg", alt: "Certificate 2" },
    { id: 3, src: "/cert3.jpg", alt: "Certificate 3" },
    { id: 4, src: "/cert4.jpg", alt: "Certificate 4" },
  ];

  return (
    <section id="certificates" className="certificates">
      <h2>Certificates</h2>
      
      {/* Certificates Grid */}
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="certificate-item"
            onClick={() => setSelectedImage(cert.src)}
          >
            <img src={cert.src} alt={cert.alt} />
          </div>
        ))}
      </div>

      {/* Lightbox Effect */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Certificate" />
        </div>
      )}
    </section>
  );
};

export default Certificates;
