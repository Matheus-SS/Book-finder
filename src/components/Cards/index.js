import React from "react";
import noImage from "../../assets/no-image.jpg";
import {
  List,
  Card,
  CardText,
  CardTop,
  CardTitle,
  CardAuthor,
  CardPublisher,
  CardPublished,
} from "./styles";

export default function Cards({ books }) {
  return (
    <List>
      {books.map((book) => (
        <li key={book.id}>
          <a
            href={book.volumeInfo.previewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <CardTop>
                <img
                  src={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : noImage
                  }
                  alt="capa"
                />
              </CardTop>
              <CardText>
                <CardTitle>{book.volumeInfo.title}</CardTitle>
                <CardAuthor>
                  <strong>Author: </strong>
                  {book.volumeInfo.authors
                    ? book.volumeInfo.authors.map((author) => author)
                    : "None"}
                </CardAuthor>
                <CardPublisher>
                  <strong>Publisher: </strong>
                  {book.volumeInfo.publisher
                    ? book.volumeInfo.publisher
                    : "None"}
                </CardPublisher>
                <CardPublished>
                  <strong>Published: </strong>
                  {book.volumeInfo.publishedDate
                    ? book.volumeInfo.publishedDate
                    : "None"}
                </CardPublished>
              </CardText>
            </Card>
          </a>
        </li>
      ))}
    </List>
  );
}
