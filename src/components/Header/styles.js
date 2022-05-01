import styled from "styled-components";

// export const banner = styled.div`
//   width: 100%;
//   backgro img {
//     width: 100%;
//     height: 5rem;
//   }
// `;

export const Banner = styled.header`
  background-image: ${(props) => `url(${props.img})`};
  background-size: contain;
  margin-top: 0;

  img {
    width: 100%;
    height: 10rem;
  }
  h1 {
    margin-top: 0;
  }
`;
