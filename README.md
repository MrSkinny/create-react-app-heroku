## Create React App with Heroku

The purpose of this repo is to get up and running with `create-react-app` with some easy boilerplate included for a simple API server and database connection running on the same Heroku deployment.

#### Requirements

* Mongo database
* Node 6.9.x or higher

#### Dev Environment: Installation and Usage

1. `npm install`
2. Start your MongoDB database server
3. Configure `DB_NAME` in `server/config/db.js` with the name of your database

To run the development server, type: 

* `npm run dev`

By default this will start your client server using `create-react-app` default on port 3000 and an express API server on port 8080.

#### Production Deployment

1. `heroku create`
2. Create / acquire a production database URL (e.g. Mlab)
3. `heroku config:set DATABASE_URL=<your database url>`
4. `git push heroku master`

In production mode, a postinstall script will bundle the client assets using `create-react-app`'s build process and the server is configured to static serve everything from the build directory.

#### Notes

Your dev environment runs on two different ports, so when making AJAX calls, the server needs to permit CORS and is pre-configured to allow all CORS requests only IF running on dev environment.  In production, your client/server are on the same host, so CORS is disabled.
