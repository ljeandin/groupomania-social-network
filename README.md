This is the source code for a fictive company's social network.
This is a full-stack project created using :

-   Frontend : VueJs
-   Backend : NodeJs + Express
-   Database : Mysql

## Frontend

Open the "frontend" folder in your terminal and execute the command :

    vue ui

if the page doesn't automatically open, go to :

-   http://localhost:8080/

then click on "Tasks" then "serve" then "Run the task" and finally "Open the app"

## Backend

Open the "backend" folder in your terminal and execute the command:

    npm install

then

    node server ou nodemon server

## Database

Connect to your favourite Mysql Server.

In the "backend" folder, create a .env file in which you'll write :

    PASSWORD = (your password)
    NAME = (your username, often 'root')

Create a database named `groupomaniadb`.

Import the file `groupomaniadb.sql` to it (you'll find the file in the "backend" folder).

If the connexion with the database is working, the terminal will print `"The solution is: 2"` (see backend/models/db:16).
