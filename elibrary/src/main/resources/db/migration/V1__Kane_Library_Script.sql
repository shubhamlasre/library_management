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
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('Dune', 'Frank Herbert', 'Science Fiction', 250.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('Neuromancer', 'William Gibson', 'Science Fiction', 200.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('Foundation', 'Isaac Asimov', 'Science Fiction', 300.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy', 400.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('The Chronicles of Narnia', 'C.S. Lewis', 'Fantasy', 350.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('The Wheel of Time', 'Robert Jordan', 'Fantasy', 500.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('A Song of Ice and Fire', 'George R.R. Martin', 'Fantasy', 375.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('Murder on the Orient Express', 'Agatha Christie', 'Mystery', 180.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('And Then There Were None', 'Agatha Christie', 'Mystery', 200.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('The Girl with the Dragon Tattoo', 'Stieg Larsson', 'Mystery', 250.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('Gone Girl', 'Gillian Flynn', 'Mystery', 225.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('The Silent Patient', 'Alex Michaelides', 'Mystery', 200.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('The Da Vinci Code', 'Dan Brown', 'Thriller', 250.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('The Girl on the Train', 'Paula Hawkins', 'Thriller', 225.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('The Silent Patient', 'Alex Michaelides', 'Thriller', 200.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('The Girl with the Dragon Tattoo', 'Stieg Larsson', 'Thriller', 250.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('The Hunt for Red October', 'Tom Clancy', 'Thriller', 225.0, 10);
INSERT INTO Book (book_name, author_name, genre, price, stock) VALUES ('The Pillars of the Earth', 'Ken Follett', 'Historical Fiction', 350.0, 10);

