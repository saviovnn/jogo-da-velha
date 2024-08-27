function Telha({ className, value, onClick, turnoJogador }) {
  let hoverClass = null;
  if (value == null && turnoJogador != null) {
    hoverClass = `${turnoJogador.toLowerCase()}-hover`;
  }
  return (
    <div
      onClick={onClick}
      className={`text-current text-2xl flex justify-center items-center  w-full h-full ${className} ${hoverClass}`}
    >
      {value}
    </div>
  );
}

export default Telha;
