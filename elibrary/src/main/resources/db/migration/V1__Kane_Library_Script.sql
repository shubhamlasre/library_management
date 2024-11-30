Create Table book (
    book_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    book_name VARCHAR(255) NOT NULL,
    author_name Varchar(255),
    price NUMERIC(9,2),
    stock INT
);

Insert into Book (book_name, author_name, price, stock) values ('The Story Of My Experiments With The Truth', 'Mahatma Gandhi', 150.0, 10);
Insert into Book (book_name, author_name, price, stock) values ('The Guide', 'R.K. Narayan', 180.0, 10);
Insert into Book (book_name, author_name, price, stock) values ('Midnight’s Children', 'Salman Rushdie', 450.0, 10);
Insert into Book (book_name, author_name, price, stock) values ('The Interpreter Of Maladies', 'Jhumpa Lahiri', 325.0, 10);
Insert into Book (book_name, author_name, price, stock) values ('A Suitable Boy', 'Vikram Seth', 950.0, 10);
Insert into Book (book_name, author_name, price, stock) values ('God of Small Things', 'Arundhati Roy', 300.0, 10);
Insert into Book (book_name, author_name, price, stock) values ('The Inheritance of Loss', 'Kiran Desai', 275.0, 10);
Insert into Book (book_name, author_name, price, stock) values ('Gitanjali', 'Rabindranath Tagore', 120.0, 10);
Insert into Book (book_name, author_name, price, stock) values ('Train to Pakistan', 'KhusKhushwant Singh', 250.0, 10);
Insert into Book (book_name, author_name, price, stock) values ('Wings Of Fire', 'Arun Tiwari, A. P. J. Abdul Kalam', 250.0, 10);
