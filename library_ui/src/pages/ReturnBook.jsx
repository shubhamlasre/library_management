import React, { useState } from "react";
import { Header } from "../components/LibraryUI/Header";
import "./IssueBook.css";

export const ReturnBook = () => {
    const [values, setValues] = useState({
        bookId: "",
        name: "",
        email: "",
        gender: "",
        contact: "",
    });

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: [e.target.value] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    const ResetFunction = () => {
        setValues({ bookId: "", name: "", email: "", contact: "" });
    };

    return (
        <div className="container">
            <Header />
            <div className="return-book-container">
                <h1>Return Book</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="issueId">Issue Number</label>
                    <input type="text" placeholder="Enter Issue Number" name="issueId" onChange={(e) => handleChanges(e)} required value={values.issueId} />
                    <label htmlFor="name">Name*</label>
                    <input type="text" placeholder="Enter Name" name="name" onChange={(e) => handleChanges(e)} required value={values.name} />
                    <label htmlFor="email">Email*</label>
                    <input type="email" placeholder="Enter Email" name="email" onChange={(e) => handleChanges(e)} required value={values.email} />
                    <label htmlFor="contact">Contact</label>
                    <input type="text" placeholder="Enter Phone #" name="contact" onChange={(e) => handleChanges(e)} required value={values.contact} />
                    <button type="button" onClick={ResetFunction}>
                        Reset
                    </button>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
