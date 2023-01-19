# React Frontend Project

This task covers TypeScript and React basics as well as your testing skills.


## General

* Focus on a working solution rather than the most beautiful or complex
* All tasks features will start from the `develop` branch and you have to create a branch for your tasks, e.g., `task/01-listuser`
* When you are done with a task, please create a merge/pull request to branch `develop`.
* You are allowed to merge between task/feature branches. 
* When you finished a task please create a work in progress pull request back to `develop` and assign it to @expertsieve.
* If you can not finish a task or have an issue during implementation try to explain it in the pull request description and/or `README` file
* Leave some documentation about how to built your solution, built.sh and start.sh scripts are welcome.
* If you have any questions during your test task, please visit https://expertsieve.freshdesk.com or write an email to support@expert-sieve.com
* TypeScript is madatory

## Task 1

Create a React[^1] application that lists all users and their addresses provided by the users API of JSONPlaceholder[^2].

## Task 2

Add at least one unit-test for each of the components you created using Jest[^3] or other tools. More is better.

## Task 3

Add the possibility to view the albums and the photos of a selected user.

## Task 4

Add at least one end-to-end test for your application using cypress[^4] or other tools. More is better.

## Bonus

- Add pagination for more than ten enties and filtering for all lists.
- Still some time? Add the creation of a new album for a user. (The backend[^2] accepts the PUT/POST but would not change anything)

## Expectations

- Use TypeScript.
- Do not create a project subdirectory. Thus, your `package.json` shall reside in this root dir.
- Provide usefull documentation about how to set up, run, test the project.
- Document your coding process with Git[^5] and publish your result to the repository you got along with 
this tasks. We will then clone your code and run it locally on our machines.
- The result in the repository should be a git history of your development process (a single commit with
the complete application is not acceptable. 
- We want to see multiple commits showing your progress), a README document on how to install and start your application, and a package.json with scripts to build and serve your application.
- Styling of your html is not necessary. Simple is better than complicated. 
- Consider your application a proof-of-concept, quicker development using tools to achieve the result is better than hand crafting every line but taking 5x as long. 
- You can use whatever resources/libraries/open-source in addition (but not as a replacement) of the libraries previously mentioned. 
- If you use a cli that writes 98% of your code, fine! 
- If you want to use different testing libraries, feel free to do so, but please provide some arguments.
- If you have any questions do not hesitate to contact us.


[^1]: https://reactjs.org
[^2]: https://jsonplaceholder.typicode.com/
[^3]: https://jestjs.io/
[^4]: https://www.cypress.io/
[^5]: https://git-scm.com


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

