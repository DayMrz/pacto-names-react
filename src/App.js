import React, { useState } from 'react';
import Footer from './components/Footer'
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
    <div className='App'>
      <div className='box'>
        <label className='label'>
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
      </div>
      <main className='main'>
        <Letters letters={name} />
      </main>
      <div className='box'>
        <p className='hashtag'>&#35;pactosabroso</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
