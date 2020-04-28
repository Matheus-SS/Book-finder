import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.div`
  font-size: 54px;
  font-weight: bold;
  margin-bottom: 15px;

  a {
    color: #dd11ea;
  }
`;

export const Form = styled.form`
  margin-bottom: 20px;
  input {
    width: 240px;
    padding: 5px;
    border: none;
    border-radius: 4px;
    margin-right: 5px;
  }

  button {
    padding: 5px;
    border: none;
    border-radius: 4px;
    background: #dd11ea;
    font-weight: bold;
  }

  button:hover {
    transition: 0.5s;
    opacity: 0.9;
  }
`;

export const Pagination = styled.div`
  margin-top: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  button {
    border: none;
    background: none;
  }
  p {
    color: #dd11ea;
    font-size: 26px;
    margin: 0 5px;
  }
`;

export const Apresentation = styled.div`
  margin-top: 20px;
  max-width: 900px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: flex-end;
  flex: 1;
  align-items: center;

  height: 20px;
  width: 100%;
  color: #000;
  background: #dd11ea;

  p {
    font-weight: bold;
    font-size: 14px;
    padding: 0 10px;
  }
`;
