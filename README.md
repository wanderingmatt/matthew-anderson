# Portfolio

Portfolio of Matthew Anderson — leader, designer, and Canadian expat.

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

`$ npm run clean`

## Updating Dependencies

If you ever want to bump the dependencies for the project, you can do so using [Check Updates](https://www.npmjs.com/package/npm-check-updates).

##### Install Check Updates

`$ npm install -g npm-check-updates`

##### Update Hints and Install New Versions

```
$ ncu -u
$ npm install
```

##### Parcel and Sharp Patch

Parcel's image transformer only accepts Sharp `^0.33.5`, which has known vulnerabilities. To run Sharp `^0.35.5` instead, the project patches Parcel's accepted range in `patches/@parcel+transformer-image+2.16.4.patch`. [patch-package](https://www.npmjs.com/package/patch-package) re-applies the patch automatically after every `npm install`.

When you upgrade Parcel, `patch-package` will warn that the patch was made for an older version. Check `SHARP_RANGE` in `node_modules/@parcel/transformer-image/lib/loadSharp.js`:

- **If the new Parcel accepts the installed Sharp version**, delete the `patches` directory. If nothing else needs patching, also remove `patch-package` and the `postinstall` script from `package.json`.
- **If it doesn't**, edit `SHARP_RANGE` to match the installed Sharp version and regenerate the patch:

```
$ npx patch-package @parcel/transformer-image
```

Then delete the old patch file and run a clean build (`npm run clean`, `npm run start`) to confirm images still generate.

## Deploying

The `deploy` task will automatically rebuild your app including production URLs, copy the local `dist` folder to the `gh-pages` branch as a subtree, and push it to GitHub.

`$ npm run deploy`
