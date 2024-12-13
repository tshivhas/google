import React from "react";
import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
  const { notes, deleteNotes, toggleModal, setSelectedNote } = props;
  return (
    <div className="notes">
      {notes.length === 0 ? (
        <p>Note you add appear here</p>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            // id={note.id}
            // title={note.title}
            // text={note.text}
            note={note}
            deleteNotes={deleteNotes}
            toggleModal={toggleModal}
            setSelectedNote={setSelectedNote}
          />
        ))
      )}
      {/* {
        notes.map((notes, index)=> 
          <Note key={index} id={notes.id} title={notes.title} text={notes.text} />
        )
      } */}
      {/* <h1>NOTES</h1> */}
      {/* <Note id={notes[0].id} title={notes[0].title} text={notes[0].text} /> */}
      {/* <Note id={notes[1].id} title={notes[1].title} text={notes[1].text} />
      <Note id={notes[2].id} title={notes[2].title} text={notes[2].text} />
      <Note id={notes[3].id} title={notes[3].title} text={notes[3].text} />  */}
    </div>
  );
};

export default Notes;
