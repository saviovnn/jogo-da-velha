import JogoDaVelha from "./components/JogoDaVelha";
import "./App.css";
function App() {
  return (
    <div className="bg-gray-800 h-screen flex flex-col items-center text-white">
      <JogoDaVelha />
      <footer className=" flex flex-1 items-end py-4">
        <div className="text-gray-600 text-center font-semibold">
          Savio Vianna - savioviannasilva@hotmail.com
        </div>
      </footer>
    </div>
  );
}

export default App;
