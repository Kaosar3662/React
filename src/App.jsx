import { Outlet } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <Nav />
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height:"Fft-content"
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
