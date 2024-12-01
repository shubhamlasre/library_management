import React, { useState } from "react";
import { Header } from "../components/LibraryUI/Header";
import "./IssueBook.css";

export const IssueBook = () => {
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
            <div className="issue-book-container">
                <h1>Issue Book</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="bookId">Book Id</label>
                    <input type="text" placeholder="Enter Book Id" name="bookId" onChange={(e) => handleChanges(e)} required value={values.bookId} />
                    <label htmlFor="name">Name*</label>
                    <input type="text" placeholder="Enter Name" name="name" onChange={(e) => handleChanges(e)} required value={values.name} />
                    <label htmlFor="email">Email*</label>
                    <input type="email" placeholder="Enter Email" name="email" onChange={(e) => handleChanges(e)} required value={values.email} />
                    <label htmlFor="contact">Contact</label>
                    <input type="text" placeholder="Enter Phone #" name="contact" onChange={(e) => handleChanges(e)} required value={values.contact} />
                    <label htmlFor="gender">Gender</label>
                    <input type="radio" name="gender" onChange={(e) => handleChanges(e)} /> Male
                    <input type="radio" name="gender" onChange={(e) => handleChanges(e)} /> Female
                    <input type="radio" name="gender" onChange={(e) => handleChanges(e)} /> Other
                    <button type="button" onClick={ResetFunction}>
                        Reset
                    </button>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
