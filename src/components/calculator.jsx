const Calculator = (props) => {
  const appendValue = value => {
    const input = document.getElementById('calcInput');
    input.value += value;
  };

  const clearDisplay = () => {
    const input = document.getElementById('calcInput');
    input.value = '';
  };

  const calculateResult = () => {
    const input = document.getElementById('calcInput');
    try {
      input.value = eval(input.value).toString();
    } catch {
      input.value = 'Error';
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>{props.title.average}</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          padding: '16px',
          border: 'solid 1px grey',
          width: 'fit-content',
          background: '#FF5536',
        }}
      >
        <input
          type="text"
          id="calcInput"
          disabled
          style={{
            background: 'white',
            padding: '4px 8px',
          }}
          placeholder="-------------------------------------------"
        />

        <div
          style={{
            display: 'grid',
            width: '100%',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: '8px',
          }}
        >
          <button onClick={() => appendValue(0)}>0</button>
          <button onClick={() => appendValue(1)}>1</button>
          <button onClick={() => appendValue(2)}>2</button>
          <button onClick={() => appendValue('+')}>+</button>
          <button onClick={() => appendValue(3)}>3</button>
          <button onClick={() => appendValue(4)}>4</button>
          <button onClick={() => appendValue(5)}>5</button>
          <button onClick={() => appendValue('-')}>-</button>
          <button onClick={() => appendValue(6)}>6</button>
          <button onClick={() => appendValue(7)}>7</button>
          <button onClick={() => appendValue(8)}>8</button>
          <button onClick={() => appendValue('*')}>*</button>
          <button onClick={() => appendValue(9)}>9</button>
          <button onClick={() => appendValue('/')}>/</button>
          <button onClick={clearDisplay}>C</button>
          <button onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
