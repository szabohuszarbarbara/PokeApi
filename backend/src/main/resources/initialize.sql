DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pokemons;

CREATE TABLE pokemons (
                          id varchar(255),
                          date DATE,
                          PRIMARY KEY (date)
);

INSERT INTO pokemons (id, date)
VALUES (1023, '2023-01-20');

INSERT INTO pokemons (id, date)
VALUES (563, '2023-01-21');

INSERT INTO pokemons (id, date)
VALUES (245, '2023-01-22');

INSERT INTO pokemons (id, date)
VALUES (89, '2023-01-23');


CREATE TABLE users (
                       id serial NOT NULL,
                       name varchar(255),
                       username varchar(255) UNIQUE,
                       email varchar(255) UNIQUE,
                       password varchar(255),
                       image_source varchar(255),
                       profile_description varchar(511),
                       role varchar(255),
                       PRIMARY KEY (id)
);
INSERT INTO users (id, name, username, email, password, image_source, profile_description, role)
VALUES (1, 'Tom Hanks', 'Tom', 'tomhanks@gmail.com', '$2a$10$9grcRNFGIO6aWL.V5jkjKO.RX.RmyD6y7zcljKFNV2E4WO3FUARbi', null, 'I am a great actor of great movies.','ROLE_ADMIN');

INSERT INTO users (id, name, username, email, password, image_source, profile_description, role)
VALUES (2, 'Tim Burton', 'Tim', 'timburton@gmail.com', '$2a$10$9grcRNFGIO6aWL.V5jkjKO.RX.RmyD6y7zcljKFNV2E4WO3FUARbi', null, 'I am a great director of great movies.','ROLE_ADMIN');

INSERT INTO users (id, name, username, email, password, image_source, profile_description, role)
VALUES (3, 'Johnny Depp', 'Johnny', 'johnny01@gmail.com', '$2a$10$9grcRNFGIO6aWL.V5jkjKO.RX.RmyD6y7zcljKFNV2E4WO3FUARbi', null, 'I am a great actor.','ROLE_ADMIN');

