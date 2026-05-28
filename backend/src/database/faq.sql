-- this file is used to create frequently asked questions (FAQ) table in the database

CREATE TABLE IF NOT EXISTS faq (
    id SERIAL PRIMARY KEY,
    service_id BIGINT UNSIGNED NOT NULL,
    question VARCHAR(255) NOT NULL,
    answer TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE
);