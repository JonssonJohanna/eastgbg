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
  background-size: cover;
  background-position: bottom;
  margin-top: 0;
  width: 100%;
  height: 10rem;
  background-repeat: no-repeat;

  img {
    width: 100%;
    object-fit: cover;
  }
  h1 {
    margin-top: 0;
  }
`;
