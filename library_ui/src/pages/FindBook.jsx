import React, { useState } from "react";
import { Header } from "../components/LibraryUI/Header";
import "./IssueBook.css";

export const FindBook = () => {
    const url = "http://localhost:8080/fetchBook?bookName=";
    const [bookName, setBookName] = useState("");
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const fetchBook = () => {
        fetch(url + bookName + "&pageNumber=" + currentPage + "&pageSize=10")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((d) => {
                setBooks(d.content);
                setTotalPages(d.totalPages);
            })
            .catch((error) => {
                console.error("Error fetching books:", error);
            });
    };

    const handleChanges = (e) => {
        setBookName(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchBook();
    };

    const previousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            fetchBook(currentPage);
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
            fetchBook(currentPage);
        }
    };

    return (
        <div className="container">
            <Header />
            <div className="book-container">
                <h1>Find Book</h1>
                <div className="underline"></div>
                <form onSubmit={handleSearch}>
                    <label htmlFor="bookName">Book Name</label>
                    <input type="text" placeholder="Enter Book Name to be searched" name="bookName" onChange={(e) => handleChanges(e)} required value={bookName} />
                    <button type="submit">Search</button>
                </form>
                <table className="table" align="center">
                    <thead>
                        <tr>
                            <th>Book Id</th>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Genre</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.length === 0 ? (
                            <tr>
                                <td colSpan="10">No books available</td>
                            </tr>
                        ) : (
                            books.map((book) => (
                                <tr key={book.bookId}>
                                    <td>{book.bookId}</td>
                                    <td>{book.bookName}</td>
                                    <td>{book.authorName}</td>
                                    <td>{book.genre}</td>
                                    <td>{book.price}</td>
                                    <td>{book.stock}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                {currentPage === 0 ? (
                    <></>
                ) : (
                    <button type="button" onClick={previousPage}>
                        Previous
                    </button>
                )}
                {books.length === 0 || currentPage === totalPages - 1 ? (
                    <></>
                ) : (
                    <button type="button" onClick={nextPage}>
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};
