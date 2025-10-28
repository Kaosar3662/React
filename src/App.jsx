import Hero from './components/calculator';
const useFul = {
  good: "does calculate",
  average: "average ui",
  bad: "does not support everything",
}
const App = () => {
  return (
    <div>
      <Hero title={useFul} />
    </div>
  );
};

export default App;
