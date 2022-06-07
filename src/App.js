import React, { useState } from 'react';
import Footer from './components/Footer'
function Letters(props) {

  const letters = props.letters.split('')
  
  return (
    <div className='letters'>
      {letters.map((letter, index) => {
        const type = letter === ' ' ? 'div' : 'span'
        const Container = ({children, ...props}) => React.createElement(type, props, children)

        let variation
        if(letter === 'i') {
          variation = 'small'
        }
        else {
          variation = undefined
        }

        if(letter === ' '){
          variation = 'space'
        }
        return <Container key={`${index}-${letter}`} className={variation}>{letter}</Container>
      }
      )}
    </div>
  );
}

function App() {
  const [name, setName] = useState('');
  
  return (
    <div className='App'>

      <div className='steps-box'>
        <ol className='steps'>
          <li>Escribe tu nombre</li>
          <li>Toma foto de pantalla</li>
          <li>Recorta y listo!</li>
        </ol>
      </div>

      <div className='input-box'>
        <label className='label'>
          Nombre:
          <input
            className='input'
            placeholder='Nombre'
            type='text'
            maxLength={12}
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
