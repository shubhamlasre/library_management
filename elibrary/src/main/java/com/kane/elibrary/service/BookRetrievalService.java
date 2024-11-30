package com.kane.elibrary.service;

import java.util.List;

import com.kane.elibrary.domain.Book;

public interface BookRetrievalService {

    public List<Book> fetchAllBooks();

    public Book fetchBook(String bookName);
}
