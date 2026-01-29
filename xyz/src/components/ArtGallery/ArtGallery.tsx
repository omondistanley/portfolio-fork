import React, { useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { artItems } from "../../data/art";
import "./_art-gallery.scss";

interface ArtGalleryProps {}

const ArtGallery: React.FC<ArtGalleryProps> = () => {
  const [selectedItem, setSelectedItem] = useState<typeof artItems[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (item: typeof artItems[0]) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <section id="art-gallery" className="art-gallery-section my-4">
      <h2>Random Flicks & Musings</h2>
      <p className="section-description">
        A collection of my photography, thoughts, and creative musings.
      </p>
      
      <Row className="g-4 art-grid">
        {artItems.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div 
              className="art-item"
              onClick={() => handleImageClick(item)}
            >
              <div className="art-image-wrapper">
                <img
                  src={item.imageUrl}
                  alt={item.title || "Creative Work"}
                  className="art-image"
                  loading="lazy"
                />
                <div className="art-overlay">
                  {item.title && <h5>{item.title}</h5>}
                  {item.category && <span className="art-category">{item.category}</span>}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal for viewing full-size image */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        centered
        className="art-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedItem?.title || "Creative Work"}
            {selectedItem?.category && (
              <span className="ms-2 badge bg-secondary">{selectedItem.category}</span>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <>
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title || "Creative Work"}
                className="img-fluid mb-3"
              />
              {selectedItem.description && (
                <p>{selectedItem.description}</p>
              )}
              {selectedItem.date && (
                <p className="text-muted"><small>Created: {selectedItem.date}</small></p>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default ArtGallery;

