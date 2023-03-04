# rodrig.io
Git repo for my personal page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run this project locally:
You will need Node.js and React to work on it and Docker to build it.
Get Node.js from here: https://nodejs.org/en/download/
Once you have Node installed, run the following command to install dependencies:
`npm i`

Once you have dependencies installed, run this command to start the local dev server:
`npm run start`

Building a Docker image:
You will need to have Docker installed. The best way to do that is to install [Docker Desktop](https://www.docker.com/products/docker-desktop/). Once you have Docker installed, you can package the application with the following command:
`docker build .` 
and then start the container you just built:
`docker compose up`

Deploying a Docker image:
I push my images to my Google Cloud project. To do this, I have to name my images according to a specific convention:
`docker build . -t (region)-docker.pkg.dev/(project)/(docker repo)/(name):(tag) --platform linux/amd64`
Note that we must specify platform in case our local computer is not a linux/amd64 machine. Once the image is built, we push:
`docker push (region)-docker.pkg.dev/(project)/(docker repo)/(name):(tag)`
Once it is in the artifact repository, I deploy it from there to real life.
