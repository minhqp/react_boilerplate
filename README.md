# React Boilerplate

This React boilerplate for building web client server using Create React App.

## Requirements

- [GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node](https://nodejs.org/en/download/) (or [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/))

**Notes**: You can skip installing Docker Compose as it is already included along with Docker Desktop for Windows.

## Getting Started

### Installation

- First, fork [this repository](https://github.com/minhqp/react_boilerplate.git) and clone it to your local machine (replace `YOUR_USERNAME` with your Github account's username).

```bash
$ git clone https://github.com/YOUR_USERNAME/react_boilerplate.git
$ cd react_boilerplate
```

- Then, run the following command to install dependencies and go grab a cup of water 🥤 while waiting for it to finish (it will take a few minutes):

```bash
$ npm install
```

- Once the command finishes, run this command to se environment variables:

```bash
$ cp env .env

# open .env and modify the environment variables (if needed)
```

### Running

```bash
$ npm start
```

## Project Structure

```
src\
 |--apis\           # Api call related functions
 |--components\     # Contains dumb React components which depend on containers for data
 |--configs\        # Config files
 |--constants\      # Const variable which can be used in the whole project
 |--containers\     # Contains React components which are connected to the redux store
 |--fonts\          # Font files
 |--languages\      # Config multi language
 |--pages\          # Contains components map to a url
 |--redux\          # Redux and saga related things
 |--router\         # App router
 |--services\       # Business logic
 |--styles          # Theme and color related things
 |--utils\          # Utilities in the form of a function
 |--index.jsx       # Base react component
```

### Apis

The apis folder defines the functions for making calls to backend API. Different area should have self-contained api file like `auth.js`, `user.js`.

### Components

The components folder contains Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. The components themselves only have a render() method (they don’t need any others) and are often just Javascript functions. They don’t have internal state to manage.

```javascript
import React from 'react';
import CardStyle from './index.style';

export default function Card({ children }) {
  return <CardStyle>{children}</CardStyle>;
}
```

### Configs

The config folder defines the environment variables for the project e.g. PORT, API Keys etc. This could be load from `.env` file, however, I like to add an extra step, I use an object to store the variables.

### Constants

The constants folder defines the const variables for the project.

> DO NOT include sensitive information like credentials of firebase in the constants, they should be defined in the .env file which is explained.

Constants which are common in whole project should be defined in `constants/index.js`. Constants which are specific for modules should be defined in self-contained constant files.

### Containers

The containers folder contains Smart components that keep track of state and care about how the app works. The container components make the API calls and connect to the redux store, pass the data down to the presentational components as props.

Container components care about how things work, while components care about how things look.

### Pages

The pages are also react components, but they represent a page or screen of an app. Components living in this folder should map to a url. This is useful because if you want to move to Next.JS.

### Router

The router folder includes:

- `appRoutes.js` defines the app's routes for each page.
- `PrivateRoute.jsx` defines private routes in the app. If the user is logged in, go on and display the component in question; otherwise, redirect the user to login page.
- `PublicRoute.jsx` defines public and restricted routes in the app. The difference between two types is defined if restricted props. `restricted = false` meaning that route is public; or else, it is restricted.
- `index.jsx` defines all the route we want.

### Services

The services folder contain all the business logic of your application and can be used by container. Services write code that’s entirely separated from React.

### Styles

The styles folder is responsible for housing the files responsible for generating the styles of the application, such as colors, fonts, dimensions of the margins or styles of the buttons.

### Utils

The utils folder contain classes and functions that are used frequently in the project. For example, we have `utils/cookie.js`, that classes is responsible for set and get. These are general enough - and reusable enough - that they deserve to go in their own folder.

## Contribution Workflow

To start contributing to this project, you first need to fork this repository and clone it to your local machine. Each time you want to change something, do the following steps:

- Create a new branch named `task/{sort_name}/{sub_name}` or `bugfix/{sort_name}/{sub_name}` or `refactor/{sort_name}/{sub_name}`.
- Commit your changes (1-3 commits/merge request). Prefix your commit messages with the type of the issue, e.g. _task: Added mobile responsiveness_.
- Open a new merge request, from source branch `task/{sort_name}/{sub_name}` to target branch `master`. Also prefix your merge request's title with the type of the issue.
- Ping reviewers to review your merge request.

After your merge request has been accepted, sync your repository with the `upstream` repository (you need to [specify the remote `upstream` repository](https://help.github.com/en/articles/configuring-a-remote-for-a-fork) first):

```bash
$ git fetch upstream
$ git checkout master
$ git merge upstream/master
```
