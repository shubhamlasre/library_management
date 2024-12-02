package com.kane.elibrary.domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Getter
public class BookReturnCriteria {

    private long bookIssueId;

    private String returnerName;

    private long returnerContact;

}
