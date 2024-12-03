package com.kane.elibrary.service;

import org.springframework.data.domain.Page;

import com.kane.elibrary.domain.Book;

public interface BookRetrievalService {

    public Page<Book> fetchAllBooks(int pageNumber, int pageSize);

    public Page<Book> fetchBook(String bookName, int pageNumber, int pageSize);
}
