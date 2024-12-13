import React, { useState } from "react";
import "./Modal.css";
import Form from "../Form/Form";

const Modal = (props) => {
  const [hasCursor, setHasCursor] = useState(false)
  const { isModalOpen, selectedNote, toggleModal, editNote } = props;

  const handleCloseModel = () => !hasCursor && toggleModal()
  const handleMouseOverModal = () => setHasCursor(true)
  const handleMouseOutModal = () => setHasCursor(false)
  return (
    <div>
      <div className={`modal ${isModalOpen ? "open-modal" : ""}`} onClick={handleCloseModel}>
        <div className="modal-content" onMouseOver={handleMouseOverModal} onMouseOut={handleMouseOutModal}>
          {/* <div className="form-container active-form">
            <div className="my-active-form">
              <input type="text" className="note-title" placeholder="Title" />
              <input
                type="text"
                className="note-text"
                placeholder="Take a note..."
              />
              <div className="form-actions">
                <div className="icons">
                  <div className="tooltip">
                    <span className="material-symbols-outlined hover small-icon">
                      add_alert
                    </span>
                    <span className="tooltip-text">Remind me</span>
                  </div>
                  <div className="tooltip">
                    <span className="material-symbols-outlined hover small-icon">
                      person_add
                    </span>
                    <span className="tooltip-text">Collaborator</span>
                  </div>
                  <div className="tooltip">
                    <span className="material-symbols-outlined hover small-icon">
                      palette
                    </span>
                    <span className="tooltip-text">Change Color</span>
                  </div>
                  <div className="tooltip">
                    <span className="material-symbols-outlined hover small-icon">
                      image
                    </span>
                    <span className="tooltip-text">Add Image</span>
                  </div>
                  <div className="tooltip">
                    <span className="material-symbols-outlined hover small-icon">
                      archive
                    </span>
                    <span className="tooltip-text">Archive</span>
                  </div>
                  <div className="tooltip">
                    <span className="material-symbols-outlined hover small-icon">
                      more_vert
                    </span>
                    <span className="tooltip-text">More</span>
                  </div>
                  <div className="tooltip">
                    <span className="material-symbols-outlined hover small-icon">
                      undo
                    </span>
                    <span className="tooltip-text">Undo</span>
                  </div>
                  <div className="tooltip">
                    <span className="material-symbols-outlined hover small-icon">
                      redo
                    </span>
                    <span className="tooltip-text">Redo</span>
                  </div>
                </div>
                <button className="close-btn">close</button>
              </div>
            </div>
          </div> */}
          <Form selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote} edit />
        </div>
      </div>
    </div>
  );
};

export default Modal;
