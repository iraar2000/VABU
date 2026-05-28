-- this file is used to create the coverage table in the database

CREATE TABLE IF NOT EXISTS coverage (
    id SERIAL PRIMARY KEY,
    logo VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
