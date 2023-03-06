# rodrig.io
<h2>Git repo for my personal page</h2>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

My main libraries are [Material UI](https://mui.com/) and [React Router](https://reactrouter.com/en/main).

To run this project locally:<br/>
You will need Node.js and React to work on it and Docker to build it.<br/>
Get Node.js from here: https://nodejs.org/en/download/ <br/>
Once you have Node installed, run the following command to install dependencies: <br/>
`npm i`

Once you have dependencies installed, run this command to start the local dev server:<br/>
`npm run start`

Building a Docker image:<br>
You will need to have Docker installed. The best way to do that is to install [Docker Desktop](https://www.docker.com/products/docker-desktop/). Once you have Docker installed, you can package the application with the following command:<br/>
`docker build .` <br/>
and then start the container you just built:<br/>
`docker compose up`

Deploying a Docker image:
I push my images to my Google Cloud project. To do this, I have to name my images according to a specific convention:<br/>
`docker build . -t (region)-docker.pkg.dev/(project)/(docker repo)/(name):(tag) --platform linux/amd64`<br/>
Note that we must specify platform in case our local computer is not a linux/amd64 machine. Once the image is built, we push:<br/>
`docker push (region)-docker.pkg.dev/(project)/(docker repo)/(name):(tag)`<br/>
Once it is in the artifact repository, I deploy it from there to real life.
