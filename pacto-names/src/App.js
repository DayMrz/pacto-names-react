import React, { useState } from 'react';

function Letters(props) {

  const letters = props.letters.split('')
  
  return (
    <div className='letters'>
      {letters.map((letter, index) => {
        const type = letter === ' ' ? 'div' : 'span'
        const Container = ({children, ...props}) => React.createElement(type, props, children)
        const variation = letter === 'i' ? 'small' : undefined

        return <Container key={`${index}-${letter}`} className={variation}>{letter}</Container>
      })}
    </div>
  );
}

function App() {
  const [name, setName] = useState('');
  
  return (
    <div className="App">
      <label>
        Name:
        <input
          type='text'
          placeholder='Name'
          onChange= {e => 
            setName(e.target.value)
          }
          value={name}
        />
      </label>

      <Letters letters={name} />
    </div>
  );
}

export default App;
