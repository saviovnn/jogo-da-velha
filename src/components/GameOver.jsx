import GameState from "./GameState";
function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.emJogo:
      return <></>;
    case GameState.playerOGanhou:
      return (
        <div className="text-center border-8 border-dotted border-green-600 py-2.5 mt-12 text-xl">
          O Ganhou
        </div>
      );

    case GameState.playerXGanhou:
      return (
        <div className="text-center border-8 border-dotted border-green-600 py-2.5 mt-12 text-xl">
          X Ganhou
        </div>
      );

    case GameState.empate:
      return (
        <div className="text-center border-8 border-dotted border-yellow-400 py-2.5 mt-12 text-xl">
          Empate
        </div>
      );
  }
}

export default GameOver;
