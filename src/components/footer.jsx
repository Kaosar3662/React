import { Link } from "react-router-dom";
import "../assets/css/var.css"

const footer = () => {
  const footer = {
    width: '100%',
    display: 'grid',
    placeContent: 'center',
    padding: '120px',
    backgroundColor: 'var(--Secendary-Purple)',
  };
  return (
    <footer style={footer}>
      <Link to="/">
      <h1 style={{ color: "white" }}>Kaosar</h1>
      </Link>
    </footer>
  );
};

export default footer;