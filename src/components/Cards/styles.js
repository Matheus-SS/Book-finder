import styled from "styled-components";

export const List = styled.ul`
  max-width: 900px;

  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  li {
    margin: 5px;

    a {
      color: #dd11ea;
      text-decoration: none;
    }
  }
`;

export const Card = styled.div`
  height: 400px;
  width: 200px;
  background: #09050a;
  border-radius: 4px;

  &:hover {
    transition: 0.3s linear;
    box-shadow: 0px 0px 7px 2px #471d4a;
  }
`;

export const CardTop = styled.div`
  img {
    border-radius: 4px;

    height: 200px;
    width: 100%;
  }
`;

export const CardText = styled.div`
  margin-top: 5px;
  padding: 5px;
  p {
    margin: 10px 0;
  }
`;

export const CardTitle = styled.p`
  font-weight: bold;
  text-align: center;
`;

export const CardAuthor = styled.p``;

export const CardPublished = styled.p``;

export const CardPublisher = styled.p``;
