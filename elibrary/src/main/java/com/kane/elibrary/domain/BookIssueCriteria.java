package com.kane.elibrary.domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Getter
public class BookIssueCriteria {

    private long bookId;

    private String borrowerName;

    private String borrowerEmailId;

    private long borrowerContact;

    private String issuedBy;

}
