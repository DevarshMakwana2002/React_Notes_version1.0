import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import { useState } from 'react';
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is first note',
      date: '55/12/2015'
    },
    {
      id: nanoid(),
      text: 'This is second note',
      date: '15/12/2015'
    },
    {
      id: nanoid(),
      text: 'This is first note',
      date: '15/12/2015'
    }
    ,
    {
      id: nanoid(),
      text: 'This is new note',
      date: '30/12/2015'
    }
  ]);

  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  }

  const handleDeleteNote = (id) => {
    // console.log(id);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  console.log(darkMode);

  return (
    <div className={`${darkMode && "darkmode"}`}>
      <div className="container">
        <Header setDarkMode={setDarkMode} />
        <Search setSearchText={setSearchText}></Search>
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} handleAddNote={handleAddNote} handleDeleteNote={handleDeleteNote} searchText={searchText} />
      </div>
    </div>
  )
}

export default App;


// () => {
//   if (!darkMode) {
//     return ("darkmode");
//   }
// }