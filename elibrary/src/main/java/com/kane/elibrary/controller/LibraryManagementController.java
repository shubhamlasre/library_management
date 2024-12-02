package com.kane.elibrary.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kane.elibrary.domain.Book;
import com.kane.elibrary.domain.BookIssueCriteria;
import com.kane.elibrary.domain.BookReturnCriteria;
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
    public String issueBook(@RequestBody BookIssueCriteria issueCriteria) {
        String message = bookIssueService.issueBook(issueCriteria);
        return message;
    }

    @PutMapping("/returnBook")
    public String returnBook(@RequestBody BookReturnCriteria returnCriteria) {
        String message = bookReturnService.returnBook(returnCriteria);
        return message;
    }

    @GetMapping("/fetchBooks")
    public List<Book> fetchAllBooks() {
        List<Book> books = bookRetrievalService.fetchAllBooks();
        return books;
    }

    @GetMapping("/fetchBook")
    public List<Book> fetchBook(@RequestParam String bookName) {
        List<Book> books = bookRetrievalService.fetchBook(bookName);
        return books;
    }
}
