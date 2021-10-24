import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from './components/Search';
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Do some holiday shopping.",
      date: "12/10/20XX"
    },
    {
      id: nanoid(),
      text: "Prepare for the celebration.",
      date: "12/17/20XX"
    },
    {
      id: nanoid(),
      text: "Send out the invitations.",
      date: "12/20/20XX"
    },
  ])

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} />
      </div>
    </div>)
}

export default App;
