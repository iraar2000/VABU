-- this file is for creating the user table in the database

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    image VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(20),
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);