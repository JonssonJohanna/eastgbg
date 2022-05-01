import styled from "styled-components";
import { device } from "./../MediaQueries/";

export const Banner = styled.header`
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: bottom;
  margin-top: 0;
  width: 100vw;
  height: 10rem;
  background-repeat: no-repeat;
  color: white;

  img {
    width: 100vw;
    object-fit: cover;

    @media ${device.mobileM} {
      background-image: 100%;
    }
  }
  h1 {
    margin-top: 0;
    font-family: Cherry;
    padding-top: 1rem;
    font-size: 4rem;
    text-align: center;
  }
`;
