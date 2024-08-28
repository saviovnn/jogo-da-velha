import GameState from "./GameState";
function Reset({ gameState, onReset }) {
  if (gameState === GameState.emJogo) {
    return;
  } else {
    return (
      <button
        onClick={onReset}
        className="mt-12 px-5 py-4 bg-blue-700 rounded-xl shadow-xl font-semibold text-white w-full text-xl"
      >
        Jogar Novamente
      </button>
    );
  }
}
export default Reset;
