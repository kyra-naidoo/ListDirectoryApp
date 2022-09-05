# ListDirectoryApp

A Node.JS api that allows a client app to: 
  Obtain the full directory listing of a given directory path on the local filesystem where the api is running
An angular client app that makes a call to the API and displays reults


To get a local copy up and running follow these simple steps.

Prerequisites
This project can either be run as a standalone app with Node.js or as a container image with Docker.

Node.JS
To run the app as a standalone app with Node.js you need to install the following:

Node JS Install Node.js from the node.js website. https://nodejs.org/en/

Docker
To run the app as a docker container image you need to install the following:

Docker Follow the official docker installation instructions here: https://docs.docker.com/get-started/


Installation
Clone the repo
git clone https://github.com/kyra-naidoo/ListDirectoryApp.git
Install NPM packages
npm install 


Running the backend API as a docker image
*Build the image
docker build -t node-docker

The web app should  be accessible on http://localhost:4200

 input a valid path to a directory in order to obtain its listing information
 It should display its subfolders, clicking on a subfolder, should dispplay stats if its a file, or show a directory listing
 
 ![Screenshot 2022-09-06 000919](https://user-images.githubusercontent.com/82475191/188516436-b31ea8f3-2312-4a4c-bce1-0af50b5c10cc.jpg)
 

