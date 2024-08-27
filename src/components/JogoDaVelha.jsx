import { useState, useEffect } from "react";
import Quadro from "./Quadro";

const PLAYER_X = "X";
const PLAYER_O = "O";

const combinacoesVencedoras = [
  // Linhas
  { combo: [0, 1, 2], linhaClass: "linha-row-1" },
  { combo: [3, 4, 5], linhaClass: "linha-row-2" },
  { combo: [6, 7, 8], linhaClass: "linha-row-3" },

  // Colunas
  { combo: [0, 3, 6], linhaClass: "linha-column-1" },
  { combo: [1, 4, 7], linhaClass: "linha-column-2" },
  { combo: [2, 5, 8], linhaClass: "linha-column-3" },

  // Diagonais
  { combo: [0, 4, 8], linhaClass: "linha-diagonal-1" },
  { combo: [2, 4, 6], linhaClass: "linha-diagonal-2" },
];

function ChecagemGanhador(telhas, setLinhaClass) {
  for (const { combo, linhaClass } of combinacoesVencedoras) {
    const valorTelha1 = telhas[combo[0]];
    const valorTelha2 = telhas[combo[1]];
    const valorTelha3 = telhas[combo[2]];

    if (
      valorTelha1 !== null &&
      valorTelha1 === valorTelha2 &&
      valorTelha1 === valorTelha3
    ) {
      setLinhaClass(linhaClass);
    }
  }
}

function JogoDaVelha() {
  const [telhas, setTelhas] = useState(Array(9).fill(null));
  const [turnoJogador, setTurnoJogador] = useState(PLAYER_X);
  const [linhaClass, setLinhaClass] = useState();

  const handleCliqueTelha = (index) => {
    if (telhas[index] !== null) {
      return;
    }

    const newTelhas = [...telhas];
    newTelhas[index] = turnoJogador;
    setTelhas(newTelhas);
    if (turnoJogador === PLAYER_X) {
      setTurnoJogador(PLAYER_O);
    } else {
      setTurnoJogador(PLAYER_X);
    }
  };

  useEffect(() => {
    ChecagemGanhador(telhas, setLinhaClass);
  }, [telhas]);

  return (
    <div>
      <h1 className="text-white font-bold text-4xl mb-4 flex items-center justify-center">
        Jogo da Velha
      </h1>
      <Quadro
        turnoJogador={turnoJogador}
        telhas={telhas}
        onCliqueTelha={handleCliqueTelha}
        linhaClass={linhaClass}
      />
    </div>
  );
}
export default JogoDaVelha;
