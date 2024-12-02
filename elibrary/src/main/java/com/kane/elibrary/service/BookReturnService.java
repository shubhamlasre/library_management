package com.kane.elibrary.service;

import com.kane.elibrary.domain.BookReturnCriteria;

public interface BookReturnService {

    public String returnBook(BookReturnCriteria returnCriteria);
}
