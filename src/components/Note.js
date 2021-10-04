import {MdDeleteForever} from 'react-icons/md'

const Note = () => {
    return(
        <div className="note">
            <span>Hello World!</span>
            <div className="note-footer">
                <small>10/03/2021</small>
                <MdDeleteForever className = "delete-icon" size="1.3em" />
            </div>
        </div>
    )
}

export default Note;
