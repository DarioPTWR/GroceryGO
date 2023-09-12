CREATE TABLE users (
    user_id serial PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE product_preferences (
    preference_id serial PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    gluten_free BOOLEAN NOT NULL,
    lactose_intolerant BOOLEAN NOT NULL,
    healthier_choice BOOLEAN NOT NULL,
    vegetarian_based BOOLEAN NOT NULL,
    halal_certified BOOLEAN NOT NULL,
    spice_intolerant BOOLEAN NOT NULL,
    nuts_free BOOLEAN NOT NULL,
    other_preferences VARCHAR(255)
);

