package com.kane.elibrary.repository;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.kane.elibrary.domain.BookIssueDetail;

import jakarta.transaction.Transactional;

@Repository
public interface BookIssueDetailRepository extends JpaRepository<BookIssueDetail, Long> {

    @Modifying
    @Transactional
    @Query("Update BookIssueDetail b SET b.returnDate = :returnDate, b.isTransactionActive = :isTransactionActive, "
            + "b.returnerName = :returnerName, b.returnerContact = :returnerContact WHERE b.issueId = :issueId")
    public int updateReturnDetailsAndIsTransactionActive(long issueId, LocalDate returnDate, String returnerName, long returnerContact, boolean isTransactionActive);

}
