<div>
<div className="form-container active-form" onClick={formClickHandler}>
  <form
    className={isActiveForm ? "my-active-form" : "my-not-active-form"}
    // id="form"
    onSubmit={submitFormHandler}>
    {isActiveForm && (
      <input
        // id="note-title"
        type="text"
        className="note-title"
        placeholder="Title"
        onChange={titleChangeHandler}
        value={title}
      />
    )}

    <input
      // id="note-text"
      type="text"
      className="note-text"
      placeholder="Take a note..."
      onChange={textChangeHandler}
      value={text}
    />

    {isActiveForm ? (
      <div className="form-actions first">
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

        <button type="submit" className="close-btn">
          close
        </button>
      </div>
    ) : (
      <div className="form-actions">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            check_box
          </span>
          <span className="tooltip-text">New List</span>
        </div>

        <div className="tooltip">
          <span className="material-symbols-outlined hover">brush</span>
          <span className="tooltip-text">New Drawing</span>
        </div>

        <div className="tooltip">
          <span className="material-symbols-outlined hover">image</span>
          <span className="tooltip-text">New Image</span>
        </div>
      </div>
    )}

    {/* <div className="form-actions">
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

      <button type="submit" className="close-btn">
        close
      </button>
    </div> */}
  </form>
</div>
</div>











import React, { useState } from "react";
import "./Form.css";
import { uid } from "uid";

const Form = (props) => {
  console.log(props);
  const { edit, selectedNote } = props;
  const [title, setTitle] = useState((edit && selectedNote.title) || "");
  const [text, setText] = useState((edit && selectedNote.text) || "");
  const [isActiveForm, setIsActiveForm] = useState(props.edit);

  // const titleChangeHandler = (event) => {
  //   console.log(event.target.value);
  // };

  // const textChangeHandler = (event) => {
  //   console.log(event.target.value);
  // };

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const textChangeHandler = (event) => {
    setText(event.target.value);
    setIsActiveForm(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!edit) {
      const note = {
        id: uid(),
        title,
        text,
      };

      console.log(note);
      props.addNote(note);
      setIsActiveForm(false);
    } else {
    }
    setTitle("");
    setText("");
  };
 };

  const formClickHandler = () => {
  setIsActiveForm(true);
 };
 
export default Form;

