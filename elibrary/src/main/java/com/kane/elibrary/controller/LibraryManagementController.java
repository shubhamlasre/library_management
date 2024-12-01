package com.kane.elibrary.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kane.elibrary.domain.Book;
import com.kane.elibrary.service.BookIssueService;
import com.kane.elibrary.service.BookRetrievalService;
import com.kane.elibrary.service.BookReturnService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LibraryManagementController {

    @Autowired
    private BookIssueService bookIssueService;

    @Autowired
    private BookRetrievalService bookRetrievalService;

    @Autowired
    private BookReturnService bookReturnService;

    @PostMapping("/issueBook")
    public String issueBook(@RequestParam long bookId) {
        String message = bookIssueService.issueBook(bookId);
        return message;
    }

    @PutMapping("/returnBook/{issueId}")
    public String returnBook(@PathVariable long issueId) {
        String message = bookReturnService.returnBook(issueId);
        return message;
    }

    @GetMapping("/fetchBooks")
    public List<Book> fetchAllBooks() {
        List<Book> books = bookRetrievalService.fetchAllBooks();
        return books;
    }

    @GetMapping("/fetchBook")
    public Book fetchBook(@RequestParam String bookName) {
        Book book = bookRetrievalService.fetchBook(bookName);
        return book;
    }
}
