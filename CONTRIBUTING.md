# Contributing

If you'd like to contribute, please open an issue describing what you want to change and why, or comment on an existing issue. We'd love to have you.

Starfish's file structure is relatively simple - you won't need to touch most of it.

> Currently, all of the application code is in index.js
> Everything else is text files, image files, the gitignore (tells git which files/folders to ignore), a template for making the environment variables, a folder for tests, the package.json (which is a node configuration file), a folder to hold the CSV(s) of employee info, and files to configure eslint, prettier, and nvm.

#### Before submitting your Pull Request, please do each of the following steps, and fix any problems that come up:

1. Make sure the code runs and gives the output you expect.
1. If your change adds an environment variable, be sure to add it to the `.env.template` file and to the `process.env` being created before each test in the `test.js` file.
1. Run the linter `npm run lint` and/or `npm run lint-fix` and make sure everything passes.
1. Run the tests `npm test` and make sure everything passes. If your change adds new functionality, it would be great if you added a test for it too! (Our test suite is still a work in progress and doesn't cover everything yet, but it's getting there. Also, on some systems, the tests hang. This is a known bug and we have an open issue (#86) to fix it. Until then, you can still run the tests and then force quit the process.)
1. Once you've pushed your commits to github, make sure that your branch can be auto-merged (there are no merge conflicts). If not, on your computer, merge master into your branch, make sure everything still runs correctly and passes all the tests, and then push up those changes.

Thanks!
