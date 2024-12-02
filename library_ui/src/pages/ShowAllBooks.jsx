import React, { useEffect, useState } from "react";
import { Header } from "../components/LibraryUI/Header";
import "./IssueBook.css";

export const ShowAllBooks = () => {
    const url = "http://localhost:8080/fetchBooks";
    const [data, setData] = useState([]);

    const fetchBooks = () => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((d) => {
                setData(d);
            })
            .catch((error) => {
                console.error("Error fetching books:", error);
            });
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div>
            <Header />
            <div className="find-book-container">
                <h1>All Book</h1>

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
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan="10">No books available</td>
                            </tr>
                        ) : (
                            data.map((book) => (
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
            </div>
        </div>
    );
};
