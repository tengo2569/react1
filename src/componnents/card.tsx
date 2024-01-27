import  { useState } from 'react';
import './card.css';

interface mainprops {
    img: string;
    name: string;
    date: string;
    text: string;
    number: number;
   

}






const Card = (props: mainprops) => {
    const { img, name, date, text } = props;
    const [number, currnumber] = useState(props.number);
    const [onplus, plusclk] = useState(false);
    const [onminus, minclk] = useState(false);

    const plus = () => {
        if (!onplus) {
            currnumber(currnum => currnum + 1);
            plusclk(true);
            minclk(false);
        }
    };

    const minus = () => {
        if (!onminus && number > 0) {
            currnumber(currnum => Math.max(currnum - 2, 0));
            minclk(true);
            plusclk(false);
        }
    };

    return (
        <div className='lb1'>
            <div className='firstline'>
                <img src={img} alt="" />
                <h1>{name}</h1>
                <h2>{date}</h2>
            </div>
            <div className="txtbox">
                <p>{text}</p>
            </div>
            <div className="lastline">
                <div className="changevalue">
                    <button className='btn1' onClick={plus}>
                        <img src='./plus.svg' alt="" />
                    </button>
                    <h3>{number}</h3>
                    <button className='btn2' onClick={minus}>
                        <img src='./minus.svg' alt="" />
                    </button>
                </div>
                <button className="reply">
                    <img src='./arrow.svg' alt="" />
                    <img src='./reply.svg' alt="" />
                </button>
            </div>
        </div>
    );
}

export default Card;
