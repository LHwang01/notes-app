const AddNote = () => {
    return (<div className="note new">
        <textarea
            rows="8" 
            cols="10" 
            placeholder="Enter your note"
        ></textarea>
        <div className="note-footer">
            <small>200 Remaining</small>
            <button class="save">Save</button>
        </div>
    </div>)
}

export default AddNote;
