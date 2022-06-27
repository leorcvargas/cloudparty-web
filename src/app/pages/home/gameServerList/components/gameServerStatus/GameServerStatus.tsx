import React, { useCallback, useEffect, useState } from "react";
import { useInterval } from "../../../../../../hooks/useInterval";

import * as S from "./GameServerStatus.styles";

type Props = { gameServerId: string };

function GameServerStatus({ gameServerId }: Props) {
  const [status, setStatus] = useState<"ONLINE" | "BOOTING" | "OFFLINE">();

  const findStatus = useCallback(async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/game-server/${gameServerId}/status`
    );
    const data = await res.json();

    setStatus(data.status);
  }, [gameServerId]);

  useEffect(() => {
    findStatus();
  }, [findStatus]);

  useInterval(async () => {
    await findStatus();
  }, 30000);

  return (
    <S.GameServerStatusBadge gameServerStatus={status}>
      &#9679; {status ?? "LOADING"}
    </S.GameServerStatusBadge>
  );
}

export default GameServerStatus;
