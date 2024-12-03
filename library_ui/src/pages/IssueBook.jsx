import React, { useState } from "react";
import { Header } from "../components/LibraryUI/Header";
import "./IssueBook.css";

export const IssueBook = () => {
    const url = "http://localhost:8080/issueBook";
    const [response, setResponse] = useState("");
    const [action, setAction] = useState("");
    const [values, setValues] = useState({
        bookId: "",
        borrowerName: "",
        email: "",
        contact: "",
        issuedBy: "",
    });

    const issueBooks = () => {
        fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                bookId: values.bookId,
                borrowerName: values.borrowerName,
                borrowerEmailId: values.email,
                borrowerContact: values.contact,
                issuedBy: values.issuedBy,
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
                console.error("Error Issuing books:", error);
            });
    };

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        issueBooks();
        setAction("Submitted");
    };

    const ResetFunction = () => {
        setValues({ bookId: "", borrowerName: "", email: "", contact: "", issuedBy: "" });
        setAction("");
    };

    return (
        <div className="container">
            <Header />
            <div className="issue-book-container">
                <h1>Issue Book</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="bookId">Book Id*</label>
                    <input type="text" placeholder="Enter Book Id" name="bookId" onChange={(e) => handleChanges(e)} required value={values.bookId} />
                    <label htmlFor="borrowerName">Name*</label>
                    <input type="text" placeholder="Enter Name" name="borrowerName" onChange={(e) => handleChanges(e)} required value={values.borrowerName} />
                    <label htmlFor="email">Email*</label>
                    <input type="email" placeholder="Enter Email" name="email" onChange={(e) => handleChanges(e)} required value={values.email} />
                    <label htmlFor="contact">Contact*</label>
                    <input type="text" placeholder="Enter Phone #" name="contact" onChange={(e) => handleChanges(e)} required value={values.contact} />
                    <label htmlFor="issuedBy">issued By*</label>
                    <input type="text" placeholder="Issued By" name="issuedBy" onChange={(e) => handleChanges(e)} required value={values.issuedBy} />
                    {action === "Submitted" ? <div className="response-message">{response}</div> : <div></div>}
                    <button type="button" onClick={ResetFunction}>
                        Reset
                    </button>
                    <button
                        type="submit"
                        onClick={() => {
                            setAction("Submitted");
                        }}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
