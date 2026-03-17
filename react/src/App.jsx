import "./App.css";

function App(props) {
  console.log(props);
  return (
    <>
    <header>
      <h1>Hello, {props.subject}!</h1>
    </header>
    <button type="button" className="Primary"> 
       Download CV
      </button>
    </>
  );
}
export default App;