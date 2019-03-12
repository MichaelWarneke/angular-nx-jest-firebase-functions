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
If using Ubuntu (WSL) install deps for cypress<br>
apt-get install xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2<br>

<b>Check thats all working</b><br>
ng serve

### Firebase init

firebase init<br>
Select all relevant services (Firestore, Functions, Hosting, Storage)<br>
This will also install the functions folder. It will be delted later, but we keep it for copying some stuff.<br>

### Firebase functions

Create the functions app
ng g node-application functions --directory=backend --framework=express --unitTestRunner=jest --tags=backend-functions-app
Replace teh content of main.ts with the content of the original functions folder index.ts and uncomment the helloWorld function

angular.json
Delete the line "externalDependencies": "none" from angular.json inside the backend-functions section.
The line will cause a lot of errors when building to production with modules not found (all of them are json files)

firebase.json
In the firebase.json add following line under the predeploy section of the functions
"source": "/"
Without this line there will be an error "Path must be a string" when building

package.json
In the package.json add following lines somewhere in the base of the tree (where all the other stuff is)
"main": "dist/apps/backend/functions/main.js",
"engines": {
"node": "8"
},
In the scripts section add following scripts to have the functions started
"firebase:serve": "concurrently --kill-others \"yarn build backend-functions --watch\" \"firebase serve --only functions\"",
"firebase:shell": "concurrently --kill-others \"yarn build backend-functions --watch\" \"firebase functions:shell\" --raw",
"firebase:deploy": "firebase deploy",
"firebase:logs": "firebase functions:log"

Add dependencies
yarn add concurrently -D
yarn add firebase firebase-admin firebase-functions

Test a serve of the functions
yarn firebase:serve

Now delete the original functions folder.

### Nestjs

.. coming
