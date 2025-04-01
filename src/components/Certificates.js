import { useState } from "react";
import "../styles/certificates.css";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    { id: 1, src: "/images/TCS.jpg", alt: "Certificate 1", name: "TCS iON Career Edge - Young Professional" },
    { id: 2, src: "/images/ibm.jpg", alt: "Certificate 2", name: "Python for Data Science" },
    { id: 3, src: "/images/sharktank.jpg", alt: "Certificate 3", name: "Entrepreneurship Meet" },
    { id: 4, src: "/images/DataScience.jpg", alt: "Certificate 4", name: "Data Science and Machine Learning Internship" },
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
            <p className="certificate-name">{cert.name}</p> {/* Display certificate name */}
          </div>
        ))}
      </div>

      {/* Lightbox Effect */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>✖</button>
            <img src={selectedImage} alt="Certificate" className="full-certificate" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
