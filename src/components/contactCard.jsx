import '../assets/css/var.css';
const contactCard = props => {
  const card = {
    display: 'flex',
    padding: '20px',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '0.4px solid var(--Neutral-Black-900, #090F1F)',
    background: 'var(--Neutral-White-200, #EFE8F7)',
    width:`${props.width}`
  };
  const left = {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: '16px',
  };
  const licon = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '60px',
    border: '0.4px solid var(--Neutral-Black-900, #090F1F)',
    background: 'var(--Brand-Primary, #FFD24F)',
  };
  const ricon = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '60px',
    border: '0.4px solid var(--Neutral-Black-900, #090F1F)',
    background: 'var(--Brand-Primary, #FFD24F)',
  };

  const text = {
    display: 'flex',
    flexDirection: 'column',
    gap:"12px"
  };
  const text2 = {
    color: 'var(--Neutral-Black-900)',
  };

  return (
    <div style={card}>
      <div style={left}>
        <div style={licon}>
          <img src={props.src} alt="Icon" />
        </div>
        <div style={text}>
          <p>{props.title}</p>
          <p style={text2}>{props.text}</p>
        </div>
      </div>
      <div style={ricon}>
        <img src="/arrow-up-right.svg" alt="icon" />
      </div>
    </div>
  );
};

export default contactCard;
