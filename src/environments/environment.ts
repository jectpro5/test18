// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    firebase: {
        apiKey: 'AIzaSyDqAtFY-xvPuTdQpKwR0NU2DzYyhtlb5tM',
        authDomain: 'todo-e41f8.firebaseapp.com',
        databaseURL: 'https://todo-e41f8.firebaseio.com',
        projectId: 'todo-e41f8',
        storageBucket: 'todo-e41f8.appspot.com',
        messagingSenderId: '715820356753'
    }
};
