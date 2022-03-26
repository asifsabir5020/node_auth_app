# Node Authentication App
This is a boilerplate for auth functionality, covering authentication only.
It contains a complete sample CRUD operation.

`Note: Node >= 16`

# Setup
`git clone https://github.com/asifsabir5020/node_authentication_app.git`

`cd node_authentication_app`

`create .env file with the help of .env.sample file`

`npm install`

`npm run dev`

# Some Routes


- `Get: http://localhost:5000/api/v1/books`

- `Post: http://localhost:5000/api/v1/users/auth/register
  body {
    name
    email
    password
  }
`
- `Post: http://localhost:5000/api/v1/users/auth/login
  body {
    email
    password
  }
`

