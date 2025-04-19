import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/certificates.module.css"; // Import scoped CSS module

import certificatesData from "../../public/data/certificates.json"; // Import JSON file

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates" className={styles.certificates}>
      <h2>Certificates</h2>

      {/* Certificates Grid */}
      <div className={styles.certificatesGrid}>
        {certificatesData.certificates.map((cert) => (
          <div
            key={cert.id}
            className={styles.certificateItem}
            onClick={() => setSelectedImage(cert.src)}
          >
            <Image 
              src={cert.src} 
              alt={cert.alt} 
              width={cert.width} // Use width from JSON
              height={cert.height} // Use height from JSON
              className={styles.certificateImage}
            />
            <p className={styles.certificateName}>{cert.name}</p> {/* Display certificate name */}
          </div>
        ))}
      </div>

      {/* Lightbox Effect */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>✖</button>
            <Image 
              src={selectedImage} 
              alt="Certificate" 
              width={600} // Adjust dimensions for full view
              height={400}
              className={styles.fullCertificate}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
