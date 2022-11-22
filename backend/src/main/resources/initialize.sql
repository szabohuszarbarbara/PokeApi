DROP TABLE IF EXISTS users;

CREATE TABLE users (
                       id bigint,
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
VALUES (1, 'Tom Hanks', 'Tom', 'tomhanks@gmail.com', '1234', null, 'I am a great actor of great movies.','ROLE_ADMIN');

INSERT INTO users (id, name, username, email, password, image_source, profile_description, role)
VALUES (2, 'Tim Burton', 'Tim', 'timburton@gmail.com', '1234', null, 'I am a great director of great movies.','ROLE_ADMIN');

INSERT INTO users (id, name, username, email, password, image_source, profile_description, role)
VALUES (3, 'Johnny Depp', 'Johnny', 'johnny01@gmail.com', '1234', null, 'I am a great actor.','ROLE_ADMIN');
