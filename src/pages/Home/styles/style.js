import styled from "styled-components";
import { rem } from "../../../utils/style.util";

export const Container = styled.div`
  padding: ${rem(10)} ${rem(20)};
  /* background: #eee; */
  /* width: ${rem(250)}; */
  /* margin-right: ${rem(30)}; */
`;

export const TaskHolderContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   padding: ${rem(10)} ${rem(20)};
   overflow: auto;
   min-height: 80vh;
`;
export const TaskColumn = styled.div`
  flex: none;
`;