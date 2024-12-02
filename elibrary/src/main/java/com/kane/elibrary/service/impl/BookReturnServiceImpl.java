package com.kane.elibrary.service.impl;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kane.elibrary.domain.Book;
import com.kane.elibrary.domain.BookIssueDetail;
import com.kane.elibrary.domain.BookReturnCriteria;
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
    public String returnBook(BookReturnCriteria returnCriteria) {

        String message;
        Optional<BookIssueDetail> issueDetailOptional = bookIssueRepo.findById(returnCriteria.getBookIssueId());
        if (issueDetailOptional.isPresent()) {
            BookIssueDetail issueDetail = issueDetailOptional.get();
            if (issueDetail.isTransactionActive()) {
                long daysBetween = ChronoUnit.DAYS.between(issueDetail.getExpectedReturnDate(), LocalDate.now());
                //fine of 10 per day just for the scenario
                float fine = daysBetween > 0 ? daysBetween * 10 : 0;
                bookIssueRepo.updateReturnDetailsAndIsTransactionActive(returnCriteria.getBookIssueId(), LocalDate.now(), returnCriteria.getReturnerName(), returnCriteria.getReturnerContact(), false, fine);
                // if the book is issued means it is definitely present in the repository
                Book book = bookRepo.findById(issueDetail.getBookId()).get();
                bookRepo.updateBookStock(book.getBookId(), book.getStock() + 1);
                message = "Book ( " + issueDetail.getBookName() + " ) returned Successfully";
            } else {
                message = "No active transaction exist";
            }
        } else {
            message = "Incorrect issueId";
        }
        return message;
    }

}
