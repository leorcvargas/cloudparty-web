import React, { useCallback, useEffect, useState } from "react";

import { GameServer } from "../../../../types/GameServer";
import GameServerCard from "./components/gameServerCard/GameServerCard";
import * as S from "./GameServerList.styles";

function GameServerList() {
  const [gameServers, setGameServers] = useState<GameServer[]>([]);

  const findGameServers = useCallback(async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/game-server`);
    const data = await res.json();
    setGameServers(data);
  }, []);

  useEffect(() => {
    findGameServers();
  }, [findGameServers]);

  return (
    <S.ListContainer>
      {gameServers.map((gameServer) => (
        <GameServerCard key={gameServer.id} gameServer={gameServer} />
      ))}

      {!gameServers.length && <S.Empty>No servers found</S.Empty>}
    </S.ListContainer>
  );
}

export default GameServerList;
