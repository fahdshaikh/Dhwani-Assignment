import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';

const Card = (props) => {
    const { input, digit } = props;
    const [num, setNum] = useState(new Array(input).fill(''));
    const [inputBox, setInputBox] = useState([]);
    const [allCards, setAllCards] = useState([]);

    useEffect(() => {
        inputBox[0].focus();
    }, []);

    const handleChange = (e, i) => {
        let temp = [...num];
        temp[i] = e.target.value;
        setNum(temp);

        if (e.target.value.length === 4 && i < input - 1) {
            inputBox[i + 1].focus();
        } else if (e.target.value.length === 0 && i !== 0) {
            inputBox[i - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let temp = num.join('');
        if (temp.length !== 16) {
            alert('Please 16 digit valid Card Number!');
        } else if (isNaN(temp)) {
            alert('please enter digits only');
        } else {
            let temp2 = [...allCards, num];
            setAllCards(temp2);
        }
    };

    useEffect(() => {
        Array.from(document.querySelectorAll('input')).forEach(
            (input) => (input.value = ''),
        );
        setNum(new Array(input).fill(''));
        inputBox[0].focus();
    }, [allCards]);

    const handleDelete = (e, i) => {
        e.preventDefault();
        let temp = [...allCards];
        temp = temp.filter((card, index) => i !== index);
        setAllCards(temp);
    };

    return (
        <>
            <div className={styles.container}>
                <h2>Card Number*</h2>
                {num.map((item, i) => (
                    <input
                        ref={(n) => (inputBox[i] = n)}
                        className={styles.input}
                        maxLength={digit}
                        onChange={(e) => handleChange(e, i)}
                        key={i}
                    />
                ))}
                <button
                    className={styles.button}
                    onClick={(e) => handleSubmit(e)}
                >
                    Submit
                </button>
            </div>
            <h2>{allCards && allCards.length > 0 ? 'All Cards' : ''}</h2>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {allCards.map((card, i) => (
                    <div key={i} className={styles.container}>
                        <div style={{ marginRight: '20px', display: 'flex' }}>
                            {card.map((num, i) => (
                                <h3 key={i} style={{ marginRight: '10px' }}>
                                    {num}
                                </h3>
                            ))}
                        </div>
                        <button
                            className={styles.button}
                            onClick={(e) => handleDelete(e, i)}
                        >
                            Del Card
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Card;
