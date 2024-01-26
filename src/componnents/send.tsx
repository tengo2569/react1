
import  { useState, useRef } from 'react';
import './send.css';

function Send() {
    const [newContent, setNewContent] = useState('');
    const [showComment, setShowComment] = useState(false); // State to control visibility
    const [editMode, setEditMode] = useState(false); // State to control edit mode
    const [showWarning, setShowWarning] = useState(false); // State to control warning popup
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSendClick = () => {
        if (inputRef.current) {
            const inputText = inputRef.current.value;
            setNewContent(inputText);
            setShowComment(true); // Show the comment div when "SEND" button is clicked
            setEditMode(false); // Turn off edit mode after sending
        }
    };

    const handleCloseClick = () => {
        setShowComment(false); // Hide the comment div when close button is clicked
    };

    const handleDeleteClick = () => {
        setShowWarning(true); // Show the warning popup when delete button is clicked
    };

    const handleConfirmDelete = () => {
        setShowWarning(false); // Hide the warning popup
        setNewContent(''); // Clear the content when delete is confirmed
    };

    const handleCancelDelete = () => {
        setShowWarning(false); // Hide the warning popup when delete is canceled
    };

    const handleEditClick = () => {
        setEditMode(true); // Enable edit mode when edit button is clicked
    };

    return (
        <div>
            {showComment && (
                <div className='comment'>
                    <div className="info">
                        <img className='tengo' src="./tengo.jpg" alt="" />
                        <p className='name'>Tengo Kajrishvili</p>
                        <div className='you'><img src="./you.svg" alt="" /></div>
                        <p className='date'>just now</p>
                    </div>
                    {editMode ? (
                        <input ref={inputRef} className='editInput' value={newContent} onChange={(e) => setNewContent(e.target.value)} />
                    ) : (
                        <div className='newcont'>{newContent}</div>
                    )}
                    <div className="lastline">
                        <button className='delete' onClick={handleDeleteClick}><img src="./bin.svg" alt="" /> <img src="./delete.svg" alt="" /></button>
                        <button className='edit' onClick={handleEditClick}><img src="./pen.svg" alt="" /> <img src="./edit.svg" alt="" /></button>
                    </div>
                    <button onClick={handleCloseClick} className='exit'> <img className='newimg' src="./new.png" alt="" /></button>
                </div>
            )}
            <div className='sendbox'>
                <input ref={inputRef} className='combox' placeholder='Type here ...' />
                <div className="personal">
                    <img className='boy' src="./tengo.jpg" alt="" />
                    <button className='lastbtn' onClick={handleSendClick}><h4>SEND</h4></button>
                </div>
            </div>
            {showWarning && (
                <div className="popup">
                    <p>Delete comment?</p>
                    <h5>Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</h5>
                    <div className="yesno">
                  
                    <button className='no' onClick={handleCancelDelete}>NO,CANCEL</button>
                    <button className='yes' onClick={handleConfirmDelete}>YES, DELETE</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Send;
