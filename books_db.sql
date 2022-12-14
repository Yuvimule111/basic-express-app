create database books_db;
use books_db;

create table books(
    id INT NOT NULL AUTO_INCTREMENT,
    title VARCHAR(20) NOT NULL,
    price DOUBLE,
    author VARCHAR(30),
    published DATE NOT NULL,
    publisher VARCHAR(20),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY (id)
);

insert into books values
        (1, 'My First Book', 599.99, 'Yuvraj Mule', 
    CURDATE(), 'AMD Book House',
    CURDATE(), CURDATE()
    );
select * from books;