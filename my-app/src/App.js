import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";
import Note from "./components/Notes/Note";

const NOTES = [
  // {
  //   id: "a123",
  //   title: "Some title1 CAR",
  //   text: "Some text1",
  // },
  // {
  //   id: "a124",
  //   title: "Some title1 BUSINESS",
  //   text: "Some text1",
  // },
  // {
  //   id: "a125",
  //   title: "Some title1 HOUSE",
  //   text: "Some text1",
  // },
  // {
  //   id: "a126",
  //   title: "Some title1 KNOWLEDGE",
  //   text: "Some text1"
  // }
];
console.log(
  NOTES.map((notes) => {
    return notes;
  })
);
const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  // const addNote = (note) => {
  //   setNotes((prevNotes) => {
  //     // return [...prevNotes, note]
  //     return [...notes, note];
  //   });
  // };

  const addNote = (note) => {
    setNotes((notes) => {
      // return [...prevNotes, note]
      return [...notes, note];
    });
  };
  // const editNote = (editedNote) => {
  //   const newArray = notes.map(note =>{
  //     console.log("before", note)
  //     if(editedNote.id === note.id){
  //       note.title = editedNote.title
  //       note.text = editedNote.text
  //     }
  //     console.log("after", note)
  //     return note
  //   })
  //   console.log(newArray)
  // }(
  const editNote = (editedNote) => {
    setNotes((prevNotes) => {
      const newArray = prevNotes.map((note) => {
        if (editedNote.id === note.id) {
          note.title = editedNote.title;
          note.tex = editedNote.text;
        }
        return Note;
      });
      return newArray;
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => id !== note.id);
    });
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
        />
      )}
    </div>
  );
};

export default App;
