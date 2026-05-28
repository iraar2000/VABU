-- this file is for creating the visa table in the database

CREATE TABLE IF NOT EXISTS visa (
    id SERIAL PRIMARY KEY,
    visa_type_id BIGINT UNSIGNED NOT NULL,
    country_id BIGINT UNSIGNED NOT NULL,
    fee INTEGER,
    issue_date DATE NOT NULL,
    expiry_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (visa_type_id) REFERENCES visa_type(id) ON DELETE CASCADE,
    FOREIGN KEY (country_id) REFERENCES country(id) ON DELETE CASCADE
);