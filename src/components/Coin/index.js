import React from "react";

import harry from "../../assets/harry.jpg";
import harry2 from "../../assets/harry2.jpg";

import agatha from "../../assets/agatha.jpg";
import agatha2 from "../../assets/agatha2.jpg";

import stephen from "../../assets/stephen.jpg";
import stephen2 from "../../assets/stephen2.jpg";

import { Coin, FlipCoinInner, FrontCoin, BackCoin } from "./styles";

const Authors = [
  { id: 1, name: "Agatha Christie", imageFront: agatha, imageBack: agatha2 },
  { id: 2, name: "J. K. Rowling", imageFront: harry, imageBack: harry2 },
  { id: 3, name: "Stephen King", imageFront: stephen, imageBack: stephen2 },
];
export default function Coins() {
  return (
    <Coin>
      {Authors.map((author) => (
        <FlipCoinInner key={author.id}>
          <FrontCoin>
            <img src={author.imageFront} alt={author.name} />
          </FrontCoin>
          <BackCoin>
            <img src={author.imageBack} alt={author.name} />
            <p>{author.name}</p>
          </BackCoin>
        </FlipCoinInner>
      ))}
    </Coin>
  );
}
