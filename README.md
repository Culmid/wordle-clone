# Wordle Clone

## Description

This project is a simple clone of the popular online game _Wordle_. This project is built using JS, CSS and WebPack. The words in this _Wordle_ clone may be obscure as the list of words is just an arbitrary list sourced online. It is not single play per day, like the original _Wordle_ game, it can be played repeatedly. It is not meant to be a perfect copy of _Wordle_, however, all of the basic functionality of _Wordle_ should be present.

## Usage

This project is at its core a node project, so normal node project practices apply to this project. Check `package.json` for the relevant commands and their functionality.

### Installation

```bash
npm install
```

This command installs all node modules necessary for this project, in the directory `node_modules`. Please be aware that this directory is rather large, so be cautious if your disk space is limited.

### Build

```bash
npm run build
```

This command statically builds the assets necessary to run this project and places them into the `dist` directory. If you would like to run the project statically, this is the way to do so. Run this command, then open the index.html file in the `dist` directory. Note: This command has to be run after every change to the code base, if you are altering the code base.

### Run

```bash
npm run start
```

This command starts a hot reloading development server for this project. It will update with all changes made in the code base and will automatically show the web page. This would be the preferred or recommended method of starting the project, especially if it is your intention to start quickly and just play with the project.
