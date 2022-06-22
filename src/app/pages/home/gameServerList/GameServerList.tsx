import React, { useEffect, useState } from "react";

import { GameServer } from "../../../../types/GameServer";
import GameServerCard from "./components/gameServerCard/GameServerCard";
import * as S from "./GameServerList.styles";

function GameServerList() {
  const [gameServers, setGameServers] = useState<GameServer[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/game-server`)
      .then((res) => res.json())
      .then((data) => setGameServers(data));
  }, []);

  return (
    <S.ListContainer>
      {gameServers.map((gameServer) => (
        <GameServerCard key={gameServer.id} gameServer={gameServer} />
      ))}

      {!gameServers.length && <span>No servers found</span>}
    </S.ListContainer>
  );
}

export default GameServerList;
