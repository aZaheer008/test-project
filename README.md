

## Description

The test project of NestJS

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## The functionality 

```bash
# Create the Token 
Hit the Post API with the given below data and URL , it will return the access_token
URL = "/auth/login" in local it will be "http://localhost:3000/auth/login"
Data = {"username": "john", "password": "changeme"}

# Acess the products with pagination
Hit the Get Api with access_token as authorization Bearer token and get the paginated products data , skip and limit will perform pagination
URL = http://localhost:3000/products?skip=10&limit=2
Use the access_token token got from "/auth/login" API 

```

## License

Nest is [MIT licensed](LICENSE).
