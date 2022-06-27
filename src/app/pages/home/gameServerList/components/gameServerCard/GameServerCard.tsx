import React, { useMemo } from "react";

import { GameServer } from "../../../../../../types/GameServer";
import minecraftIcon from "./minecraft-icon.png";
import * as S from "./GameServerCard.styles";
import GameServerStatus from "../gameServerStatus/GameServerStatus";

type Props = { gameServer: GameServer };

function GameServerCard({ gameServer }: Props) {
  const address = useMemo(() => {
    return `${gameServer.hostname}:${gameServer.port}`;
  }, [gameServer]);

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    alert("Address copied to your clipboard!");
  };

  return (
    <S.Card>
      {gameServer.type === "MINECRAFT" && (
        <S.CardImage src={minecraftIcon} alt="Minecraft server" />
      )}

      <S.CardColumn>
        <S.CardHeader>
          <S.CardHeaderTitle>{gameServer.name}</S.CardHeaderTitle>
          <GameServerStatus gameServerId={gameServer.id} />
        </S.CardHeader>

        <S.CardBody>
          <S.GameServerAddress onClick={copyAddress}>
            {address}
          </S.GameServerAddress>
        </S.CardBody>
      </S.CardColumn>
    </S.Card>
  );
}

export default GameServerCard;
