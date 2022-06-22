import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  border: 1px solid #ffffff;
  padding: 10px 14px;
  width: 400px;
  align-items: center;
`;

export const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const CardImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 14px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardBody = styled.div``;

export const CardHeaderTitle = styled.span``;

export const GameServerStatusBadge = styled.div`
  font-size: 0.75rem;
  color: lime;
`;

export const GameServerAddress = styled.button`
  background: unset;
  border: unset;
  color: #fff;
  padding: 0;
  font-size: 1rem;
  border-bottom: 1px solid #fff;

  &:hover {
    color: gray;
    border-bottom: 1px solid gray;
    cursor: pointer;
  }
`;
