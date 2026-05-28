-- this file is for creating the country table in the database

CREATE TABLE IF NOT EXISTS country (
    id SERIAL PRIMARY KEY,
    flagLogo VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);