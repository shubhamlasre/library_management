import React, { useState } from "react";
import { Header } from "../components/LibraryUI/Header";
import { toast, ToastContainer } from "react-toastify";
import "./IssueBook.css";

export const FindBook = () => {
    const url = "http://localhost:8080/fetchBook?bookName=";
    const [data, setData] = useState([]);
    const [bookName, setBookName] = useState("");

    const fetchBook = () => {
        fetch(url + bookName)
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

    const handleChanges = (e) => {
        setBookName(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchBook();
        toast(data, {
            closeButton: ({ closeToast }) => (
                <button
                    onClick={() => {
                        closeToast();
                    }}>
                    OK
                </button>
            ),
        });
    };

    return (
        <div className="container">
            <Header />
            <div className="find-book-container">
                <h1>Find Book</h1>
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
                <ToastContainer />
            </div>
        </div>
    );
};
