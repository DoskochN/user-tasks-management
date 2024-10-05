-- step 1 init
CREATE TABLE users
(
    id       SERIAL PRIMARY KEY,
    username VARCHAR(100)        NOT NULL,
    email    VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE profile
(
    id      SERIAL PRIMARY KEY,
    user_id INT REFERENCES users (id),
    bio     TEXT
);

CREATE TABLE taskCategories
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(50) CHECK (name IN ('subtask', 'mainTask', 'forStudents'))
);

CREATE TABLE tasks
(
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    profile_id  INT REFERENCES profile (id),
    category_id INT REFERENCES taskCategories (id)
);

CREATE TABLE subTasks
(
    id      SERIAL PRIMARY KEY,
    name    VARCHAR(100) NOT NULL,
    task_id INT REFERENCES tasks (id)
);


-- step 2 insert data
INSERT INTO users (username, email)
VALUES ('john_doe', 'john@example.com'),
       ('jane_smith', 'jane@example.com');

INSERT INTO profile (user_id, bio)
VALUES (1, 'Software Engineer and technology enthusiast.'),
       (2, 'A passionate data scientist and machine learning expert.');

INSERT INTO taskCategories (name)
VALUES ('mainTask'),
       ('subtask'),
       ('forStudents');

INSERT INTO tasks (name, profile_id, category_id)
VALUES ('Develop Backend API', 1, 1),
       ('Create Data Model', 1, 1),
       ('Design Frontend UI', 2, 2),
       ('Write Documentation', 2, 2);

INSERT INTO subTasks (name, task_id)
VALUES ('Create Controllers', 1),
       ('Build Services', 1),
       ('Implement Data Validation', 2),
       ('Finalize API Endpoints', 2),
       ('Design Forms', 3),
       ('Create Components', 3),
       ('Add Graphs', 4),
       ('Write API Usage', 4);


-- step 3 test queries
SELECT *
from users;

SELECT *
from profile;

SELECT *
from tasks;

SELECT *
from subTasks;

SELECT *
from taskCategories;


-- get task by user
SELECT t.name AS task_name, tc.name AS category_name
FROM tasks t
         JOIN profile p ON t.profile_id = p.id
         JOIN taskCategories tc ON t.category_id = tc.id
WHERE p.user_id = 2;


-- get subTask by user
SELECT st.name AS subtask_name, t.name AS task_name, tc.name AS category_name
FROM subTasks st
         JOIN tasks t ON st.task_id = t.id
         JOIN profile p ON t.profile_id = p.id
         JOIN taskCategories tc ON t.category_id = tc.id
WHERE p.user_id = 2;
