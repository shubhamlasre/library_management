import React, { useEffect, useState } from "react";
import { Header } from "../components/LibraryUI/Header";
import "./IssueBook.css";

export const ShowAllBooks = () => {
    const url = "http://localhost:8080/fetchBooks?pageNumber=";
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const fetchBooks = (page) => {
        fetch(url + page + "&pageSize=10")
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

    useEffect(() => {
        fetchBooks(currentPage);
    }, [currentPage]);

    const previousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            <Header />
            <div className="book-container">
                <h1>All Book</h1>
                <div className="underline"></div>
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
                        {totalPages === 0 ? (
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
                {currentPage === totalPages - 1 ? (
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
