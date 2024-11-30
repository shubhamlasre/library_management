package com.kane.elibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.kane.elibrary.domain.Book;

import jakarta.transaction.Transactional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    @Modifying
    @Transactional
    @Query("UPDATE Book b SET b.stock = :stock WHERE b.bookId = :id")
    public int updateBookStock(Long id, int stock);

    public Book findByBookName(String bookName);
}
