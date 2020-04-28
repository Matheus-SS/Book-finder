import styled from "styled-components";

export const Coin = styled.div`
  display: flex;
  flex-wrap: wrap;
  perspective: 1000px;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const FlipCoinInner = styled.div`
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  height: 250px;
  width: 250px;
  text-align: center;
  margin: 0 10px;

  &:hover {
    transform: rotateY(180deg);
  }

  @media (max-width: 830px) {
    height: 200px;
    width: 200px;
  }

  @media (max-width: 720px) {
    height: 150px;
    width: 150px;
  }

  @media (max-width: 520px) {
    height: 200px;
    width: 200px;
    margin: 25px 0;
  }
`;

export const FrontCoin = styled.div`
  position: absolute;
  backface-visibility: hidden;

  height: 100%;
  width: 100%;

  img {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }
`;

export const BackCoin = styled.div`
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;

  height: 100%;
  width: 100%;
  border-radius: 50%;

  img {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }

  p {
    margin-top: 10px;
    font-weight: bold;
    font-size: 16px;
  }
`;
