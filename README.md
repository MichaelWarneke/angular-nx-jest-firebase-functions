# Nx7.6.0

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

## Steps to create

### Create Workspace

<b>Using npx or one of the other options to create nx workspaces</b><br>
npx create-nx-workspace my-workspace

<b>Add jest unit test</b><br>
ng g jest

<b>Create the web-app</b><br>
ng g app web-app --e2e-test-runner=cypress --unit-test-runner=jest --directory=frontend --routing --prefix=tabu-app--tags=tabu-app

<b>Add dep for testing</b><br>
yarn add cypress jasmine-marbles -D<br>

- If using Ubuntu (WSL) install deps for cypress<br>
  apt-get install xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2<br>

<b>Check thats all working</b><br>
ng serve

### Firebase init

firebase init<br>

- Select all relevant services (Firestore, Functions, Hosting, Storage)<br>
- This will also install the functions folder. It will be delted later, but we keep it for copying some stuff.<br>

### Firebase functions

<b>Create the functions app</b><br>
ng g node-application functions --directory=backend --framework=express --unitTestRunner=jest --tags=backend-functions-app<br>

- Replace the content of main.ts with the content of the original functions folder index.ts and uncomment the helloWorld function<br>

<b>angular.json</b><br>

- Delete the line "externalDependencies": "none" from angular.json inside the backend-functions section.<br>
- The line will cause a lot of errors when building to production with modules not found (all of them are json files)<br>

<b>firebase.json</b><br>

- In the firebase.json add following line under the predeploy section of the functions<br>
  "source": "/"<br>
- Without this line there will be an error "Path must be a string" when building<br>

<b>package.json</b><br>

- In the package.json add following lines somewhere in the base of the tree (where all the other stuff is)<br>
  "main": "dist/apps/backend/functions/main.js",<br>
  "engines": {<br>
  "node": "8"<br>
  },<br>
- In the scripts section add following scripts to have the functions started<br>
  "firebase:serve": "concurrently --kill-others \"yarn build backend-functions --watch\" \"firebase serve --only functions\"",<br>
  "firebase:shell": "concurrently --kill-others \"yarn build backend-functions --watch\" \"firebase functions:shell\" --raw",<br>
  "firebase:deploy": "firebase deploy",<br>
  "firebase:logs": "firebase functions:log"<br>

<b>Add dependencies</b><br>
yarn add concurrently -D<br>
yarn add firebase firebase-admin firebase-functions<br>

<b>Test a serve of the functions</b><br>
yarn firebase:serve<br>

<b>Now delete the original functions folder.</b><br>

### Nestjs

.. coming
