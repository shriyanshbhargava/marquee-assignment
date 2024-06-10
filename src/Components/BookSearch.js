import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const BookSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.length > 2) {
        setLoading(true);
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`
        );
        setSearchResults(response.data.docs);
        setLoading(false);
      }
    };
    fetchSearchResults();
  }, [searchQuery]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    bookshelf.push(book);
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
    alert("Added To Cart");
  };

  return (
    <div className="container">
      <h1 className="display-4 m-4">
        <mark className="rounded fw-bold">Book Search</mark>
      </h1>
      <button
        className="btn btn-secondary mb-2"
        onClick={() => (window.location.href = "/bookshelf")}
      >
        View My Bookshelf
      </button>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search for a book"
        className="form-control border-3 border-dark"
      />
      {loading ? (
        <p className="text-muted">Loading...</p>
      ) : (
        <ul className="list-group m-4">
          {searchResults.map((book) => (
            <div key={book.key} className="list-group-item mb-2 border-dark">
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
                    width={100}
                  />
                </div>
                <div className="col-md-10">
                  <h2 className="h5 pt-2 fw-bold">{book.title}</h2>
                  <p className="text-muted">
                    {book.author_name && book.author_name.join(", ")}
                  </p>
                  <button
                    onClick={() => handleAddToBookshelf(book)}
                    className="btn btn-primary btn-sm mb-2"
                  >
                    Add to Bookshelf
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookSearch;
