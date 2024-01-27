
import  { useState, useRef } from 'react';
import './send.css';

function Send() {
    const [newContent, setnewcontent] = useState('');
    const [showComment, setshowcomment] = useState(false); 
    const [editMode, seteditmode] = useState(false);
    const [showWarning, setshowarning] = useState(false); 
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSendClick = () => {
        if (inputRef.current) {
            const inputText = inputRef.current.value;
            setnewcontent(inputText);
            setshowcomment(true); 
            seteditmode(false); 
        }
    };

    const handlecloseclick = () => {
        setshowcomment(false); 
    };

    const handledeleteclick = () => {
        setshowarning(true); 
    };

    const handledelclick = () => {
        setshowarning(false); 
        setnewcontent(''); 
    };

    const handlenodelete = () => {
        setshowarning(false);
    };

    const hanndleeditclick = () => {
        seteditmode(true); 
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
                        <input ref={inputRef} className='editInput' value={newContent} onChange={(e) => setnewcontent(e.target.value)} />
                    ) : (
                        <div className='newcont'>{newContent}</div>
                    )}
                    <div className="lastline">
                        <button className='delete' onClick={handledeleteclick}><img src="./bin.svg" alt="" /> <img src="./delete.svg" alt="" /></button>
                        <button className='edit' onClick={hanndleeditclick}><img src="./pen.svg" alt="" /> <img src="./edit.svg" alt="" /></button>
                    </div>
                    <button onClick={handlecloseclick} className='exit'> <img className='newimg' src="./new.png" alt="" /></button>
                </div>
            )}
            <div className='sendbox'>
                <form action="">
                <input ref={inputRef} className='combox' placeholder='Type here ...' />
                </form>
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
                  
                    <button className='no' onClick={handlenodelete}>NO,CANCEL</button>
                    <button className='yes' onClick={handledelclick}>YES, DELETE</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Send;
