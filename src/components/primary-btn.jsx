
import "../assets/css/var.css"
const primaryBtn = (props) => {
  const btn = {
    display: "flex",
    justifyContent: "center",
    gap:"10px",
    color: 'var(--Neutral-Black-900)',
    backgroundColor: 'var(--Brand-Primary)',
    border: 'solid .4px var(--Neutral-Black-900)',
    padding: '15px 24px',
    fontSize: 'var(--regular)',
    fontWeight: "var(--medium)",
    width: `${props.width}`,
    cursor:"pointer"
  }; 
  return (
    <button style={btn} type={props.type}>
      {props.btnTitle}
      <img src="/Arrow.svg" alt="logo"></img>
    </button>
  );
};

export default primaryBtn;