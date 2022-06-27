import styled from "styled-components";

type GameServerStatusBadgeProps = {
  gameServerStatus: "ONLINE" | "BOOTING" | "OFFLINE" | undefined;
};

export const GameServerStatusBadge = styled.div.attrs(
  (props: GameServerStatusBadgeProps) => ({
    gameServerStatus: props.gameServerStatus,
  })
)`
  font-size: 0.75rem;
  text-transform: capitalize;
  color: ${({ gameServerStatus }) =>
    gameServerStatus === "ONLINE"
      ? "lime"
      : gameServerStatus === "OFFLINE"
      ? "red"
      : gameServerStatus === "BOOTING"
      ? "cyan"
      : "gray"};
`;
