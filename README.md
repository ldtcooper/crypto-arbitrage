# Crypto-Arbitrage-Database (semi-standard project option)
This is a project by [Pavan Chaudhari](https://github.com/pavcha27), [Logan Cooper](https://github.com/ldtcooper), [Rathi Kashi](https://github.com/rathikashi), and [Faruk Uslu](https://github.com/farukuslu) for CS 516 (Database Systems) at Duke University. You can find our code [here](https://github.com/ldtcooper/crypto-arbitrage). Additionally, you can read more about the motivation for this project [here](./Proposal.md).

## Housekeeping
This is a semi-standard project for the course [Database Systems/CompSci 516](https://courses.cs.duke.edu/spring22/compsci516/) at Duke University. A semi-standard project is developed by team members from idea to end product. 
## Installation
This project has three portions, each of which requires some setup.
### Database 
This project runs off of a PostgreSQL database. The backend automatically sets up the database schema, but will not add any data. The `database` directory contains three `.csv` files. Each one contains some sample data for the named table to get the database up and running. 
### Backend
The backend of this project is set up to run with `pipenv` using Python 3.9. Installing `pipenv` and running `flask run` inside of `pipenv shell` should be sufficient to run it. It should run on `localhost:5000`.

In order to connect the database to the backend, you will need to clone `backend/config.template.json` to `config.json` and fill it in with pertinant information. `host` will be where the database is running, most likely `localhost` unless you are running on WSL2. `database` is the name of the database. `username` and `password` are that of the user which owns the database in Postgres.

### Frontend
The frontend is put together with `create-react-app`. To run just the frontend, go into the `frontend` directory and run `npm start`. This should start on 

To build the frontend to allow it to be served from the Flask server, run the bash script `frontend/build.sh`. This will run the standard `npm run build` and then move the result to Flask's static directory named `build`.

### Development 
To develop the frontend, you will need to run both the server on `localhost:5000` and the development frontend on `localhost:3000`. To get these to work together, you will need to do the following:
- Un-comment the code at the end of `backend/app.py` labelled `CORS handling for frontend debugging` to ensure the API calls won't be blocked by CORS
- Specify `http://localhost:5000` in the first argument of the `fetch` in `fetchArbitrage`, `fetchHistory`, and `fetchDates` in `frontend/src/utils/helpers.js`. 
- Optionally: to run the backend with a Python debugger, you may have to replace `./config.json` with `./backend/config.json`.