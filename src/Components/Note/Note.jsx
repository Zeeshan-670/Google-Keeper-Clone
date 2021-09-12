import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { css } from '@emotion/css';

function Note(props) {
  //   const [color, setColor] = useState('colorWhite');

  //   useEffect(() => {
  //     const currentColor = localStorage.getItem('theme-color');
  //     if (currentColor) {
  //       setColor(currentColor);
  //     }
  //   }, []);

  //   const handleClick = (theme) => {
  //     setColor(theme);
  //     localStorage.setItem('theme-color', theme);
  //   };

  const [background, setBackground] = useState('#fdfdfd');

  const [font, setFont] = useState('#424242');

  const handleClick = (background, font) => {
    setBackground(background);
    setFont(font);
  };

  function handleDelete() {
    props.onDelete(props.id);
  }

  const note = css`
    background: ${background};
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px;
    width: 400px;
    margin: 16px;
    float: left;

    h1 {
      font-size: 1.1em;
      margin-bottom: 6px;
      color: ${font};
    }
    p {
      font-size: 1.1em;
      margin-bottom: 10px;
      white-space: pre-wrap;
      word-wrap: break-word;
      color: ${font};
    }
    button {
      position: relative;
      float: left;
      margin-right: 10px;
      color: #f5ba13;
      border: none;
      width: 36px;
      height: 36px;
      cursor: pointer;
      outline: none;
    }
  `;
  return (
    <div className={note}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <div className='colorOptions'>
        <div
          id='colorWhite'
          onClick={() => handleClick('#ECF0F1', '#17202A')}
        />
        <div id='colorBlue' onClick={() => handleClick('#3498DB', '#fdfdfd')} />
        <div
          id='colorOrange'
          onClick={() => handleClick('#F39C12', '#fdfdfd')}
        />
        <div id='colorRed' onClick={() => handleClick('#C0392B', '#fdfdfd')} />
        <div
          id='colorYellow'
          onClick={() => handleClick('#F1C40F', '#fdfdfd')}
        />
        <div
          id='colorGreen'
          onClick={() => handleClick('#2ECC71', '#fdfdfd')}
        />
        <div
          id='colorBlack'
          onClick={() => handleClick('#1C2833', '#fdfdfd')}
        />
        <div
          id='colorPurple'
          onClick={() => handleClick('#6C3483', '#fdfdfd')}
        />
      </div>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
