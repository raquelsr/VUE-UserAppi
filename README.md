# USER APPI

Control of users developed with VueJS and NodeJS.

- ###  SERVER SIDE / BACK-END

In the server-side folder is the development of the back-end, developed with **Express**. 
API returns data provided by static data. Every time the server is started, the data is reset.
To run it, we must launch the following commands in the root of the folder:

```sh
$ npm install
$ npm run serve # or npm run start if you want to see logs 
```

Type | ENDPOINT | Data
--- | --- | ---
GET | `/users` | Return all users
GET | `/users/:id` | Return user by *id*
POST | `/users` | Create new user
PUT | `/users/:id` | Update user by *id*
DELETE | `/users/:id` | Delete all users

Open [http://localhost:3001/users](http://localhost:3001/users) to view it in the browser all users.


- ### CLIENT SIDE / FRONT-END
In the client-side folder is the development of the front-end, developed with **VueJS**.
To run it, we must launch the following commands inside the folder:

```sh
$ npm install
$ npm run serve
```

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

Finally, you will show the complete app in [http://localhost:8080](http://localhost:8080)
