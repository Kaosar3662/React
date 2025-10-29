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
      <h1 style={{ color: "white" }}>Kaosar</h1>
    </footer>
  );
};

export default footer;