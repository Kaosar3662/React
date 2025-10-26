const Calculator = () => {
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
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <input type="text" id="calcInput" disabled />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '8px',
          }}
        >
          <button onClick={() => appendValue(0)}>0</button>
          <button onClick={() => appendValue(1)}>1</button>
          <button onClick={() => appendValue(2)}>2</button>
          <button onClick={() => appendValue(3)}>3</button>
          <button onClick={() => appendValue(4)}>4</button>
          <button onClick={() => appendValue(5)}>5</button>
          <button onClick={() => appendValue(6)}>6</button>
          <button onClick={() => appendValue(7)}>7</button>
          <button onClick={() => appendValue(8)}>8</button>
          <button onClick={() => appendValue(9)}>9</button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => appendValue('+')}>+</button>
            <button onClick={() => appendValue('-')}>-</button>
            <button onClick={() => appendValue('*')}>*</button>
            <button onClick={() => appendValue('/')}>/</button>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={clearDisplay}>Clear</button>
            <button onClick={calculateResult}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;


