Create Table book (
    book_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    book_name VARCHAR(255) NOT NULL,
    author_name Varchar(255),
    genre Varchar(255),
    price NUMERIC(9,2),
    stock INT
);

Insert into Book (book_name, author_name, genre, price, stock) values ('The Story Of My Experiments With The Truth', 'Mahatma Gandhi', 'Autobiography', 150.0, 10);
Insert into Book (book_name, author_name, genre, price, stock) values ('The Guide', 'R.K. Narayan', 'Fiction', 180.0, 10);
Insert into Book (book_name, author_name, genre, price, stock) values ('Midnight’s Children', 'Salman Rushdie', 'Fiction', 450.0, 10);
Insert into Book (book_name, author_name, genre, price, stock) values ('The Interpreter Of Maladies', 'Jhumpa Lahiri', 'Literature',325.0, 10);
Insert into Book (book_name, author_name, genre, price, stock) values ('A Suitable Boy', 'Vikram Seth', 'Fiction', 950.0, 10);
Insert into Book (book_name, author_name, genre, price, stock) values ('God of Small Things', 'Arundhati Roy', 'Fiction', 300.0, 10);
Insert into Book (book_name, author_name, genre, price, stock) values ('The Inheritance of Loss', 'Kiran Desai', 'Literature',275.0, 10);
Insert into Book (book_name, author_name, genre, price, stock) values ('Gitanjali', 'Rabindranath Tagore', 'Poetry', 120.0, 10);
Insert into Book (book_name, author_name, genre, price, stock) values ('Train to Pakistan', 'KhusKhushwant Singh', 'Historical', 250.0, 10);
Insert into Book (book_name, author_name, genre, price, stock) values ('Wings Of Fire', 'Arun Tiwari, A. P. J. Abdul Kalam', 'Autobiography', 250.0, 10);
