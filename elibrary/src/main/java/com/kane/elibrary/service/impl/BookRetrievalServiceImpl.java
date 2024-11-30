package com.kane.elibrary.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kane.elibrary.domain.Book;
import com.kane.elibrary.repository.BookRepository;
import com.kane.elibrary.service.BookRetrievalService;

@Service
public class BookRetrievalServiceImpl implements BookRetrievalService {

    @Autowired
    private BookRepository bookRepo;

    @Override
    public List<Book> fetchAllBooks() {
        List<Book> books = bookRepo.findAll();
        return books;
    }

    @Override
    public Book fetchBook(String bookName) {
        Book book = bookRepo.findByBookName(bookName);
        return book;
    }

}
