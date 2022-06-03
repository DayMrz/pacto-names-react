// componente que pinte las letras
// component que pinte las letras del input con el estilo

function Letters() {
  return (
    <div className='letters'>
      <span>P</span>
      <span>A</span>
      <span>C</span>
      <span>T</span>
      <span>O</span>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <label>
        Name:
        <input
          type='text'
        />
      </label>

      <Letters />
    </div>
  );
}

export default App;
