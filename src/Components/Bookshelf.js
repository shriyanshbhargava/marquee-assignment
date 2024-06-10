import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Bookshelf = () => {
  const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];

  return (
    <div className="container">
      <h1 className="display-4 mb-4">My Bookshelf</h1>
      <ul className="list-group mb-4">
        {bookshelf.map((book) => (
          <li key={book.key} className="list-group-item">
            <div className="row">
              <div className="col-md-2">
                <img
                  src={
                    book.cover_i
                      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`
                      : ""
                  }
                  alt={book.title}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10">
                <h2 className="h5">{book.title}</h2>
                <p className="text-muted">
                  {book.author_name && book.author_name.join(", ")}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookshelf;
