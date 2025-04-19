import { useState } from "react";
import Image from "next/image";
import "../styles/certificates.css";
import certificatesData from "../../public/data/certificates.json"; // Import JSON file

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates" className="certificates">
      <h2>Certificates</h2>

      {/* Certificates Grid */}
      <div className="certificates-grid">
        {certificatesData.certificates.map((cert) => (
          <div
            key={cert.id}
            className="certificate-item"
            onClick={() => setSelectedImage(cert.src)}
          >
            <Image 
              src={cert.src} 
              alt={cert.alt} 
              width={cert.width} // Use width from JSON
              height={cert.height} // Use height from JSON
              className="certificate-image"
            />
            <p className="certificate-name">{cert.name}</p> {/* Display certificate name */}
          </div>
        ))}
      </div>

      {/* Lightbox Effect */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>✖</button>
            <Image 
              src={selectedImage} 
              alt="Certificate" 
              width={600} // Adjust dimensions for full view
              height={400}
              className="full-certificate"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
