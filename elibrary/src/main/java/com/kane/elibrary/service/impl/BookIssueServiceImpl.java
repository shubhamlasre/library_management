package com.kane.elibrary.service.impl;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kane.elibrary.domain.Book;
import com.kane.elibrary.domain.BookIssueDetail;
import com.kane.elibrary.repository.BookIssueDetailRepository;
import com.kane.elibrary.repository.BookRepository;
import com.kane.elibrary.service.BookIssueService;

@Service
public class BookIssueServiceImpl implements BookIssueService {

    @Autowired
    private BookRepository bookRepo;

    @Autowired
    private BookIssueDetailRepository bookIssueRepo;

    @Override
    public String issueBook(long bookId) {

        String message;
        Optional<Book> optionalBook = bookRepo.findById(bookId);
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            if (book.getStock() > 0) {
                BookIssueDetail bookIssueDetail = new BookIssueDetail(book.getBookId(), book.getBookName(), LocalDate.now(), null, true);
                bookIssueRepo.save(bookIssueDetail);
                bookRepo.updateBookStock(bookId, book.getStock() - 1);
                message = "Book ( " + book.getBookName() + " ) issued Successfully";
            } else {
                message = "Sorry! Book ( " + book.getBookName() + " ) is not in stock";
            }
        } else {
            message = "Book with bookId: " + bookId + " is not found";
        }

        return message;
    }

}
