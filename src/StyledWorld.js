import styled from "styled-components";

const StyledWorld = styled.div`
  #g4 {
    background: #f4f4f4;
  }
  ${({ data }) =>
    data.map(
      (c) => `#${c.country.toLowerCase()} {
        cursor:pointer;
        fill: ${
          c.todayDeaths < 50 ? "green" : c.todayDeaths < 300 ? "orange" : "red"
        }
        
      }`
    )}
`;

export default StyledWorld;
