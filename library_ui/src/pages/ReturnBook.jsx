import React, { useState } from "react";
import { Header } from "../components/LibraryUI/Header";
import "./IssueBook.css";

export const ReturnBook = () => {
    const url = "http://localhost:8080/returnBook";
    const [response, setResponse] = useState("");
    const [action, setAction] = useState("");
    const [values, setValues] = useState({
        issueId: "",
        name: "",
        contact: "",
    });

    const returnBooks = () => {
        fetch(url, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                bookIssueId: values.issueId,
                returnerName: values.name,
                returnerContact: values.contact,
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.text();
            })
            .then((d) => {
                setResponse(d);
            })
            .catch((error) => {
                console.error("Error Returning books:", error);
            });
    };

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        returnBooks();
        setAction("Submitted");
    };

    const ResetFunction = () => {
        setValues({ bookId: "", name: "", contact: "" });
        setAction("");
    };

    return (
        <div className="container">
            <Header />
            <div className="return-book-container">
                <h1>Return Book</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="issueId">Issue Number*</label>
                    <input type="text" placeholder="Enter Issue Number" name="issueId" onChange={(e) => handleChanges(e)} required value={values.issueId} />
                    <label htmlFor="name">Name*</label>
                    <input type="text" placeholder="Enter Name" name="name" onChange={(e) => handleChanges(e)} required value={values.name} />
                    <label htmlFor="contact">Contact*</label>
                    <input type="text" placeholder="Enter Phone #" name="contact" onChange={(e) => handleChanges(e)} required value={values.contact} />
                    {action === "Submitted" ? <div className="response-message">{response}</div> : <div></div>}
                    <button type="button" onClick={ResetFunction}>
                        Reset
                    </button>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
