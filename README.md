# Dan's Single-Page-React-App Template

## Introduction

I got tired of having to make SPAs from templates and forgetting how to introduce linter and
other configurations I like. To overcome this, I created this base project template based on:

1. "Modern" (at time of creation, at least) Node.js 22
1. Standard Vite + React Template
1. eslint rules suggested by [Slushman](https://www.slushman.com/post/new-react-app-with-vite/)

This is just a barebones "Hello, world!" stype of application, but ready to work on. It also shows
a couple brief examples of component types (React functional+hooks, and class components).

## Running and Developing Locally

This step will ensure you have all the necessary capabilities to build and run your app. The
"Installation Prerequisites" section should only be needed once on your computer. After which,
simply going to the "Running the SDK" section should suffice to get it started.

### Installation Prerequisites

The following are required to run this code on your local workstation.

Node Version Manager (nvm):

1. [Install it here](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)
   if you don't have it already. Just run the provided `curl` command and resume here.
   1. If your shell has the following environment variables, you are probably good to go:
      `NVM_INC`, `NVM_DIR`, `NVM_BIN`.
1. It might ask you to restart your terminal, do it (or open a new one) to get the `nvm` commands.
1. Run:
   ```
   nvm install 22.3
   ```

Yarn Package Manager

[Yarn](https://yarnpkg.com/getting-started) is a replacement for [npm](https://www.npmjs.com/).
There are a few ways you could do this. The official way is to use corepack, which is a Node.js
tool. By running the following command, you'll get a globally-available `yarn` command:

```
corepack enable
```

VSCode Extensions: if you're using VSCode, use the ESLint plugin: `dbaeumer.vscode-eslint`.

### Running the SDK

To run this code, `cd` into the project directory, then run:

```
nvm use
yarn install
```

(Note that you will not need to run `yarn install` every time you want to start the SDK, but every
time the project's `package.json` file does, it's a good idea to.)

To run the project accessible only to your machine: `yarn dev`.

To run the project accessible over the network: `yarn dev --host`.

That's it! As you add files and update code, the Vite environment will update the browser,
reflecting live changes along the way. Adding dependencies / libraries might require it to be
restarted. Additionally, any complicated changes you might do if you introduce a state manager like
MobX, may require this live view of the app to be reloaded in the browser.

## Making your Single-Page-Application your own

The content of this template is basically a "Hello, world!". You'll need to provide the interesting
bits. Just make sure that you ...

1. Do not upgrade eslint (the 9.x.x and above series do not play nice with React plugins yet)
1. Go into `package.json` and update the fields for `name`, `private`, `version`, and `type`.
1. Give a good title to your app in the `title` portion of `index.html`.

Extending functionality:

1. Sooner or later you'll want some global state management to prevent prop-drilling your
   components. [MobX](https://mobx.js.org/react-integration.html) is a great choice!
1. Consider organizing your `src/` directory with assets, widgets, modals, and other controls in
   a sane or helpful way.
1. Use TypeScript (duh!) ... it's great, but don't get sloppy with your types, it'll haunt you.
1. Order of imports: third-party first, internal imports after.
1. Try and use an existing UI Library (like React-Bootstrap), it could save a lot of time!
1. Writing unit tests is probably good, but tricky with UI code ... better to start with making
   separate testable classes with testability in mind, with components rendering from the outputs.

## Creating a Production Build

After you've built your amazing application, you'll likely want to let people use it. That's where
the production build will come into play. If you just wish to run your app at your domain or target
system's root (i.e. `https://foo.net/`), then all you need to do is:

```
$ yarn build
```

Your build artifacts will be placed into the `dist/` directory and can be deployed (copied) to your
web server and that's it.

If your application won't live on your domain name's or target system's root path, you'll want to
perform the build targeting whichever path it'll live at. To do this, go to the file
`vite.config.ts` and uncomment the line with `//base: '/path/',`. For example, if you will be
deploying it to `https://www.foo.net/my_app/`, set that line to `base: '/my_app/',`. After that,
simply run the `yarn build` command as mentioned before.
