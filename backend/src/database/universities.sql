-- this file is used to create the universities table in the database

CREATE TABLE IF NOT EXISTS universities (
    id SERIAL PRIMARY KEY,
    logo VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    country_id BIGINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (country_id) REFERENCES country(id) ON DELETE CASCADE
);