package com.kane.elibrary.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.kane.elibrary.domain.Book;
import com.kane.elibrary.repository.BookRepository;
import com.kane.elibrary.service.BookRetrievalService;

@Service
public class BookRetrievalServiceImpl implements BookRetrievalService {

    @Autowired
    private BookRepository bookRepo;

    @Override
    public Page<Book> fetchAllBooks(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by("bookName").ascending());
        Page<Book> books = bookRepo.findAll(pageable);
        return books;
    }

    @Override
    public Page<Book> fetchBook(String bookName, int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by("bookName").ascending());
        Page<Book> books = bookRepo.findByBookNameLike(bookName, pageable);
        return books;
    }

}
