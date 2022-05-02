import styled from "styled-components";
import { device } from "./../MediaQueries/";

export const Banner = styled.header`
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: bottom;
  margin-top: 0;
  background-repeat: no-repeat;
  color: white;
  width: 100%;
  height: 8rem;
  @media ${device.laptop} {
    height: 10rem;
    width: 100vw;
  }

  img {
    width: 100%;
    object-fit: cover;
    @media ${device.laptop} {
      width: 100vw;
    }
  }
  h1 {
    margin-top: 0;
    font-family: Cherry;
    padding-top: 1rem;
    text-align: center;
    font-size: 3rem;
    @media ${device.laptop} {
      font-size: 4rem;
    }
  }
`;
