import React from 'react';

const Keypad = (props) => {
  return (
    <div className='Keypad'>
      <button id='seven' name='7' onClick={props.keyPressed}>
        7
      </button>
      <button id='eight' name='8' onClick={props.keyPressed}>
        8
      </button>
      <button id='nine' name='9' onClick={props.keyPressed}>
        9
      </button>
      <button id='four' name='4' onClick={props.keyPressed}>
        4
      </button>
      <button id='five' name='5' onClick={props.keyPressed}>
        5
      </button>
      <button id='six' name='6' onClick={props.keyPressed}>
        6
      </button>
      <button id='one' name='1' onClick={props.keyPressed}>
        1
      </button>
      <button id='two' name='2' onClick={props.keyPressed}>
        2
      </button>
      <button id='three' name='3' onClick={props.keyPressed}>
        3
      </button>
      <button id='zero' name='0' onClick={props.keyPressed}>
        0
      </button>
      <button id='decimal' name='.' onClick={props.keyPressed}>
        .
      </button>
    </div>
  );
};

export default Keypad;
