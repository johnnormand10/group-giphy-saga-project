CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- FavImagaes table
CREATE TABLE "favImages" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR (100) NOT NULL,
        "url" VARCHAR (500) NOT NULL,
        "categoryId" INT,
        "favorite" BOOLEAN DEFAULT FALSE
);

