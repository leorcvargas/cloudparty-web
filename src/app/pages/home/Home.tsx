import React, { useEffect, useState } from "react";

import { GameServer } from "../../../types/GameServer";
import GameServerCard from "./components/gameServerCard/GameServerCard";
import * as S from "./Home.styles";

function Home() {
  const [gameServers, setGameServers] = useState<GameServer[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/game-server`)
      .then((res) => res.json())
      .then((data) => setGameServers(data));
  }, []);

  return (
    <S.HomePage>
      <header>
        <S.HomeTitle>CloudParty</S.HomeTitle>
      </header>
      <S.HomeMain>
        <S.ListContainer>
          {gameServers.map((gameServer) => (
            <GameServerCard key={gameServer.id} gameServer={gameServer} />
          ))}
        </S.ListContainer>
      </S.HomeMain>
    </S.HomePage>
  );
}

export default Home;
