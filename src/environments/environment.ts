// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    firebase: {
        apiKey: 'AIzaSyCIJRO9f24T02yjqdHZfdPL5wloLC9HBks',
        authDomain: 'todo-min.firebaseapp.com',
        databaseURL: 'https://todo-min.firebaseio.com',
        projectId: 'todo-min',
        storageBucket: '',
        messagingSenderId: '202660632585'
    }
};
