import styled from "styled-components";

export const Banner = styled.header`
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: bottom;
  margin-top: 0;
  width: 100%;
  height: 10rem;
  background-repeat: no-repeat;
  color: white;

  img {
    width: 100%;
    object-fit: cover;
  }
  h1 {
    margin-top: 0;
    font-family: Cherry;
    padding-top: 1rem;
    font-size: 4rem;
    text-align: center;
  }
`;
