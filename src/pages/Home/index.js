import React, { useState, useEffect, useRef } from "react";

import googleBooksApi from "../../services/api";
import Cards from "../../components/Cards";
import Coin from "../../components/Coin";
import Loader from "../../components/Loader";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import {
  Container,
  Title,
  Form,
  Pagination,
  Apresentation,
  Footer,
} from "./styles";

export default function Home() {
  const ref = useRef(null);

  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(false);

  const [startIndex, setStartIndex] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadBooks() {
      try {
        const response = await googleBooksApi(
          `/volumes?q=${bookName}&startIndex=${startIndex}&maxResults=8`
        );
        setBooks(response.data.items);
      } catch (error) {
        console.log(error.message);
      }
    }
    loadBooks();
  }, [startIndex, bookName]);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(!loading);
    setBookName(ref.current.value);
  }

  function handleNext() {
    setPage(page + 1);
    setStartIndex(startIndex + 7);
  }

  function handlePrev() {
    if (page === 1) {
      return;
    }

    setPage(page - 1);
    setStartIndex(startIndex - 7);
  }

  return (
    <>
      <Container>
        <Title>
          <a href="/">Book Finder</a>
        </Title>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="text"
              placeholder="search by books, authors and more"
              ref={ref}
            />

            <button type="submit">
              <span>search</span>
            </button>
          </div>
        </Form>

        <div>
          <Cards books={books} />
        </div>

        {books.length !== 0 ? (
          <Pagination>
            <button onClick={handlePrev}>
              <MdNavigateBefore size={30} color=" #dd11ea" />
            </button>

            <p>{page}</p>

            <button onClick={handleNext}>
              <MdNavigateNext size={30} color=" #dd11ea" />
            </button>
          </Pagination>
        ) : (
          <>
            {loading && <Loader />}

            <Apresentation>
              <Coin />
            </Apresentation>
          </>
        )}
      </Container>
      <Footer>
        <p>Made by Matheus Santos</p>
      </Footer>
    </>
  );
}
