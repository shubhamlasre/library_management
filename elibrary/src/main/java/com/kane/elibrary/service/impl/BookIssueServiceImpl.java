package com.kane.elibrary.service.impl;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kane.elibrary.domain.Book;
import com.kane.elibrary.domain.BookIssueCriteria;
import com.kane.elibrary.domain.BookIssueDetail;
import com.kane.elibrary.repository.BookIssueDetailRepository;
import com.kane.elibrary.repository.BookRepository;
import com.kane.elibrary.service.BookIssueService;

@Service
public class BookIssueServiceImpl implements BookIssueService {

    @Autowired
    private BookRepository bookRepo;

    @Autowired
    private BookIssueDetailRepository bookIssuerepo;

    @Override
    public String issueBook(BookIssueCriteria issueCriteria) {

        String message;
        Optional<Book> optionalBook = bookRepo.findById(issueCriteria.getBookId());
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            if (book.getStock() > 0) {
                BookIssueDetail bookIssueDetail = new BookIssueDetail(book.getBookId(), book.getBookName(), issueCriteria.getBorrowerName(), issueCriteria.getBorrowerEmailId(), issueCriteria.getBorrowerContact(), LocalDate.now(), issueCriteria.getIssuedBy(), null, true);
                bookIssuerepo.save(bookIssueDetail);
                bookRepo.updateBookStock(issueCriteria.getBookId(), book.getStock() - 1);
                message = "Book ( " + book.getBookName() + " ) issued to " + issueCriteria.getBorrowerName() + " successfully";
            } else {
                message = "Sorry! Book ( " + book.getBookName() + " ) is not in stock";
            }
        } else {
            message = "Book with bookId: " + issueCriteria.getBookId() + " is not found";
        }

        return message;
    }

}
