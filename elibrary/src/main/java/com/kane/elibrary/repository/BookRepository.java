package com.kane.elibrary.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.kane.elibrary.domain.Book;

import jakarta.transaction.Transactional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    @Override
    Page<Book> findAll(Pageable pageable);

    @Modifying
    @Transactional
    @Query("UPDATE Book b SET b.stock = :stock WHERE b.bookId = :id")
    public int updateBookStock(Long id, int stock);

    @Query("SELECT b FROM Book b WHERE b.bookName LIKE %:bookName%")
    public Page<Book> findByBookNameLike(String bookName, Pageable pageable);
}
