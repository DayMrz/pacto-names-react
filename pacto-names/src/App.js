// componente que pinte las letras
// component que pinte las letras del input con el estilo

function Letters() {
  return <div className='letters'>PACTO</div>
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
