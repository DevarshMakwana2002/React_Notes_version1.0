import { useState } from 'react';
const AddNode = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');

    const textLimit = 200;

    const handelChange=(event)=>{
        if (textLimit-event.target.value.length >= 0) {
            setNoteText(event.target.value);
            
        }
    }

    const handelSaveClick = ()=>{
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
        }
        setNoteText('');
    }

    return (<div className="note new">
        <textarea rows="8" cols="10" placeholder="type to add note here ..." onChange={handelChange} value={noteText}></textarea>
        <div className="note-footer">
            <small>{textLimit-noteText.length} remaining</small>
            <button className="save" onClick={handelSaveClick}>Save</button>
        </div>
    </div>)
}

export default AddNode;