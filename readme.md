# -= Exercise for Big Panda =-

## Description
Includes a reusable Reactjs interface for comments delete and edit, an the API interface to connect to the server.

## Important information

- This feature was created as a server-rendered feature. Although its an overkill, it was intended to simulate a small feature inside another system. Thus, it was written in a webpack bundle, including a router, a header and a footer.

- Since the hot loader for webpack also points to http://localhost, but another port, some CORS communication in the API had to happen. To alow CORS in the original server, some lines were added. Those lines will not take in account security and upon deployment (if it was to happen), it should be taken care of.

## Comments

- The react component is separated from the server, at [react_components](./react_components), and can be started by running `npm start`

- The working site will be at `http://localhost:8080`

- A version can be found at [dist](./react_components/dist), which can be deployed to a server, or to a CDN

- The main engine to make the exercise works is at [CommentsWrapper](https://github.com/gabrielPacio/bigPanda/blob/master/react_components/app/components/CommentsWrapper.js).
    It will call the server for data, render it and prepare for the construction of the popups.
