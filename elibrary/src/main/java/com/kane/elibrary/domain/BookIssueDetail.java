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

    private LocalDate issueDate;

    private LocalDate returnDate;

    private boolean isTransactionActive;

    public BookIssueDetail(long bookId, String bookName, LocalDate issueDate, LocalDate returnDate, boolean isTransactionActive) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.issueDate = issueDate;
        this.returnDate = returnDate;
        this.isTransactionActive = isTransactionActive;
    }
}
