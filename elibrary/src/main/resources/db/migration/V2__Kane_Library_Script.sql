Create Table book_issue_detail (
    issue_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    book_id BIGINT NOT NULL,
    book_name VARCHAR(255) NOT NULL,
    issue_date DATE,
    return_date DATE,
    is_transaction_active BOOLEAN
);