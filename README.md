# Portfolio

Portfolio site for Matthew Anderson — leader, designer, podcaster, and Canadian expat.

## Setup

The site is built and deployed via Parcel to GitHub Pages. You will need [Homebrew](https://brew.sh/), [Node](https://nodejs.org/en/download/package-manager), and [Parcel](https://parceljs.org/) installed.

#### Install Homebrew

`$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

#### Install Node via Homebrew

`$ brew install node`

#### Install Node Dependencies

This will install Parcel and all development Node modules. Make sure you run this command from the project root.

`$ npm install`

## Developing

The `start` task will automatically rebuild your app, and serve it at http://localhost:1234/ with live reload. All development should be done in the `src` directory.

`$ npm run start`

## Cache Busting

If you run into issues while developing locally, the `clean` task will delete the Parcel cache and your current `dist` directory — providing you with a clean slate for your next build.

`$npm run clean`

## Updating Dependencies

If you ever want to bump the dependencies for the project, you can do so using [Check Updates](https://www.npmjs.com/package/npm-check-updates).

##### Install Check Updates

`$ npm install -g npm-check-updates`

##### Update Hints and Install New Versions

```
$ ncu -u
$ npm install
```

## Deploying

The `deploy` task will automatically rebuild your app, copy the local `dist` folder to the `gh-pages` branch as a subtree, and push it to GitHub.

`$ npm deploy`
