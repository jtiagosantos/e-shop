import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopAdmin = styled.div`
  min-width: 60%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  margin-bottom: 0;
  color: rgba(20, 20, 20, 0.4);
  font-size: 30px;
  font-weight: 500;
`;

export const IconAddAdmin = styled.i`
  color: rgba(20, 20, 20, 0.4);
  font-size: 30px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.5);
  }
`;

export const HorizontalLine = styled.hr`
  border: 2px solid rgba(20, 20, 20, 0.4);
  min-width: 60%;
  margin-top: -4px;
`;

export const Table = styled.table`
  width: 60%;
  margin-top: 30px;

  thead tr { border-top: 2px solid rgba(20,20,20,0.3); }
  thead tr th { border-bottom: 2px solid rgba(20,20,20,0.3); }

  tbody tr td { border-top: 1px solid rgba(20,20,20,0.1); }

  tbody tr { &:hover {
    background: rgba(77, 134, 149, 0.2);
  }}

  tbody { border-bottom: 1px solid rgba(20,20,20,0.1); }
`;

export const RemoveIcon = styled.i`
  color: #4D8695;
  font-size: 25px;
  
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;