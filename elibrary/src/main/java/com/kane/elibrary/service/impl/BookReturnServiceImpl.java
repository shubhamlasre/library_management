package com.kane.elibrary.service.impl;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kane.elibrary.domain.Book;
import com.kane.elibrary.domain.BookIssueDetail;
import com.kane.elibrary.repository.BookIssueDetailRepository;
import com.kane.elibrary.repository.BookRepository;
import com.kane.elibrary.service.BookReturnService;

@Service
public class BookReturnServiceImpl implements BookReturnService {

    @Autowired
    private BookRepository bookRepo;

    @Autowired
    private BookIssueDetailRepository bookIssueRepo;

    @Override
    public String returnBook(long issueId) {

        String message;
        Optional<BookIssueDetail> issueDetailOptional = bookIssueRepo.findById(issueId);
        if (issueDetailOptional.isPresent()) {
            BookIssueDetail issueDetail = issueDetailOptional.get();
            bookIssueRepo.updateReturnDateAndIsTransactionActive(issueId, LocalDate.now(), false);
            // if the book is issued means it is definitely present in the repository
            Book book = bookRepo.findById(issueDetail.getBookId()).get();
            bookRepo.updateBookStock(book.getBookId(), book.getStock() + 1);
            message = "Book ( " + issueDetail.getBookName() + " ) returned Successfully";
        } else {
            message = "Incorrect issueId";
        }
        return message;
    }

}
