# Bindr-Server

Server for [Bindr](https://github.com/dev-mev/Bindr-Client). Bindr is a book recommendation app written in JavaScript using the MERN stack. Book data is scraped from goodreads.com and stored in MongoDB with a Node/Express server, Mongoose, Cloudinary for media storage, and Passport.js for user auth.

## How to run it
This server is deployed to Heroku at https://bindr.herokuapp.com/ using an mLab provision. No additional steps are required to connect server and client. For instructions on how to try out the app, visit [Bindr](https://github.com/dev-mev/Bindr-Client).

## Credit
Book data was scraped using [scrapy](https://github.com/scrapy/scrapy).