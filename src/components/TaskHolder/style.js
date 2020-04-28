import styled from "styled-components";
import { rem } from "../../utils/style.util";

export const Container = styled.div`
  background: #eceff1;
  width: ${rem(250)};
  margin-right: ${rem(30)};
  border-radius: 4px;
`;


export const FixedHeight = styled.div`
    max-height: 60vh;
    overflow: auto;
`;