import Linha from "./Linha";
import Telha from "./Telha";

function Quadro({ telhas, onCliqueTelha, turnoJogador, linhaClass }) {
  return (
    <div className="grid grid-cols-custom-3 grid-rows-custom-3 cursor-pointer relative ">
      <Telha
        turnoJogador={turnoJogador}
        onClick={() => onCliqueTelha(0)}
        value={telhas[0]}
        className="border-r-4 border-b-4 border-solid border-blue-700"
      />
      <Telha
        turnoJogador={turnoJogador}
        onClick={() => onCliqueTelha(1)}
        value={telhas[1]}
        className="border-r-4 border-b-4 border-solid border-blue-700"
      />
      <Telha
        turnoJogador={turnoJogador}
        onClick={() => onCliqueTelha(2)}
        value={telhas[2]}
        className=" border-b-4 border-solid border-blue-700"
      />
      <Telha
        turnoJogador={turnoJogador}
        onClick={() => onCliqueTelha(3)}
        value={telhas[3]}
        className="border-r-4 border-b-4 border-solid border-blue-700"
      />
      <Telha
        turnoJogador={turnoJogador}
        onClick={() => onCliqueTelha(4)}
        value={telhas[4]}
        className="border-r-4 border-b-4 border-solid border-blue-700"
      />
      <Telha
        turnoJogador={turnoJogador}
        onClick={() => onCliqueTelha(5)}
        value={telhas[5]}
        className=" border-b-4 border-solid border-blue-700"
      />
      <Telha
        turnoJogador={turnoJogador}
        onClick={() => onCliqueTelha(6)}
        value={telhas[6]}
        className="border-r-4 border-solid border-blue-700"
      />
      <Telha
        turnoJogador={turnoJogador}
        onClick={() => onCliqueTelha(7)}
        value={telhas[7]}
        className="border-r-4  border-solid border-blue-700"
      />
      <Telha
        turnoJogador={turnoJogador}
        onClick={() => onCliqueTelha(8)}
        value={telhas[8]}
      />
      <Linha linhaClass={linhaClass} />
    </div>
  );
}

export default Quadro;
