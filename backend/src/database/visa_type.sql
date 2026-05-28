-- this is the file for creating the visa_type table in the database

CREATE TABLE IF NOT EXISTS visa_type (
    id SERIAL PRIMARY KEY,
    icon VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);