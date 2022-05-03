import styled from "styled-components";
import { device } from "./../MediaQueries/";

export const Buttons = styled.button`
  height: 4rem;
  width: 19rem;
  margin-top: 3rem;
  background-color: #b2322f;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 2rem;
  letter-spacing: 1px;
  font-family: Cherry;
  transition: 0.2s ease;
  cursor: pointer;
  display: block;

  :hover {
    background-color: #ac1d1b;
  }
`;
export const Gif = styled.img`
  border: #ac1d1b solid 4px;
  width: 70%;
  border-radius: 20px;
  margin-bottom: 3rem;
  @media ${device.laptop} {
    border: #ac1d1b solid 5px;
    width: 80%;
  }
`;
