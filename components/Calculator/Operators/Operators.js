import React from 'react';

const Operators = (props) => {
  return (
    <div className='Operators'>
      <button
        className='operator'
        id='divide'
        name='/'
        onClick={props.keyPressed}
      >
        /
      </button>
      <button
        className='operator'
        id='multiply'
        name='*'
        onClick={props.keyPressed}
      >
        *
      </button>
      <button className='operator' id='add' name='+' onClick={props.keyPressed}>
        +
      </button>
      <button
        className='operator'
        id='subtract'
        name='-'
        onClick={props.keyPressed}
      >
        -
      </button>
      <button id='equals' name='=' onClick={props.evaluateExpression}>
        =
      </button>
      <button id='clear' name='AC' onClick={props.clear}>
        AC
      </button>
      <button name='C' onClick={props.backspace}>
        C
      </button>
    </div>
  );
};

export default Operators;
