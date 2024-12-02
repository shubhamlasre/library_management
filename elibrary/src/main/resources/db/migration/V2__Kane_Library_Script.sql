Create Table book_issue_detail (
    issue_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    book_id BIGINT NOT NULL,
    book_name VARCHAR(255) NOT NULL,
    borrower_name VARCHAR(255) NOT NULL,
    borrower_email_id VARCHAR(255) NOT NULL,
    borrower_contact BIGINT NOT NULL,
    issued_by VARCHAR(255) NOT NULL,
    issue_date DATE,
    expected_return_date DATE,
    actual_return_date DATE,
    returner_name VARCHAR(255),
    returner_contact BIGINT,
    is_transaction_active BOOLEAN,
    fine NUMERIC(9,2)
);