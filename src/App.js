import React, { useState, useRef } from 'react';
import Footer from './components/Footer'
import html2canvas from 'html2canvas'

function Letters(props) {
  const letters = props.letters.split('')

  return (
    <div className='letters'>
      {letters.map((letter, index) => {
        const type = letter === ' ' ? 'div' : 'span'
        const Container = ({ children, ...props }) => React.createElement(type, props, children)

        let variation

        if (letter === 'i') {
          variation = 'small'
        }

        if (letter === ' ') {
          variation = 'space'
        }

        return <Container key={`${index}-${letter}`} className={variation}>{letter}</Container>
      })}
    </div>
  );
}

async function generateImage(htmlNode) {
  return html2canvas(htmlNode).then(canvas => {
    const img = canvas.toDataURL('image/png')
    console.log({ img })
    const anchor = document.createElement('a')

    anchor.href = img
    anchor.download = 'pactosabroso.png'
    anchor.style.display = 'none'

    document.body.appendChild(anchor)

    anchor.click()
  })
}

function App() {
  const [state, setState] = useState('idle'); // idle | loading
  const [name, setName] = useState('');
  const imageContainerRef = useRef(null);

  return (
    <div className='App'>

      {/* <div className='steps-box'>
        <ol className='steps'>
          <li>Escribe tu nombre</li>
          <li>Toma foto de pantalla</li>
          <li>Recorta y listo!</li>
        </ol>
      </div> */}

      <div className='input-box'>
        <label className='label' for='name'>Nombre:</label>
        <input
          id='name'
          className='input'
          placeholder='Nombre'
          type='text'
          maxLength={13}
          disabled={state === 'loading'}
          onChange={e =>
            setName(e.target.value)
          }
          value={name}
        />

        <button
          className='button'
          disabled={state === 'loading'}
          onClick={() => {
            if (imageContainerRef.current) {
              setState('loading')
              generateImage(imageContainerRef.current)
                .finally(() => setState('idle'))
            }
          }}>Descargar</button>
      </div>

      <div ref={imageContainerRef}>
        <main className='main'>
          <Letters letters={name} />
        </main>

        <div className='box'>
          <p className='hashtag'>#pactosabroso</p>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
