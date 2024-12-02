package com.kane.elibrary.domain;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@Getter
public class BookIssueDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long issueId;

    private long bookId;

    private String bookName;

    private String borrowerName;

    private String borrowerEmailId;

    private long borrowerContact;

    private LocalDate issueDate;

    private String issuedBy;

    private LocalDate returnDate;

    private String returnerName;

    private long returnerContact;

    private boolean isTransactionActive;

    public BookIssueDetail(long bookId, String bookName, String borrowerName, String borrowerEmailId, long borrowerContact, LocalDate issueDate, String issuedBy, LocalDate returnDate, boolean isTransactionActive) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.borrowerName = borrowerName;
        this.borrowerEmailId = borrowerEmailId;
        this.borrowerContact = borrowerContact;
        this.issueDate = issueDate;
        this.issuedBy = issuedBy;
        this.returnDate = returnDate;
        this.isTransactionActive = isTransactionActive;
    }
}
