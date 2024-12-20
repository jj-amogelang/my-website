import React, { useEffect } from 'react';
import './Modal.css';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="modal-header">
          <h2>{project.title}</h2>
          <p className="modal-subtitle">{project.category}</p>
        </div>
        <div className="modal-body">
          <div className="modal-task">
            <h3>Task</h3>
            <p>{project.task}</p>
          </div>
          <div className="modal-idea">
            <h3>Description</h3>
            <p>{project.idea}</p>
          </div>
          <div className="modal-images">
            {project.images?.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`${project.title} - view ${index + 1}`}
                className="modal-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 