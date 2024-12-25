import Players from "./Players";
import Player from "./Player";

function PlayersList() {
    const playerObject = Players.map((element, index) => <Player key={index} {...element} />);
    return(
    <div
    style={{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center"
    }}>{playerObject}</div>);
}

export default PlayersList;