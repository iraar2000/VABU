-- this file is for creating the scholarships table in the database

CREATE TABLE IF NOT EXISTS scholarships (
    id SERIAL PRIMARY KEY,
    education_level_id BIGINT UNSIGNED NOT NULL,
    university_id BIGINT UNSIGNED NOT NULL,
    coverage_id_list VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (education_level_id) REFERENCES education_level(id) ON DELETE CASCADE,
    FOREIGN KEY (university_id) REFERENCES universities(id) ON DELETE CASCADE
);