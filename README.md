# **Simple-crud-app**

*This is a simple Crud backend API built using Express & mongodb atlas*

## Features
- Create,Read,Update & Delete products
- Mongodb Atlas integration

## Setup
1. Clone the repo `https://github.com/Lanzy1123/simple-crud-app.git`
2. Install dependencies `npm install`
3. Create a `.env` file in the root
4. Run server `npm run dev` or `npm start`

## Endpoints
Methods |  Endpoints         |    Description
GET.    |  /api/products     |  list all products
GET     |  /api/products/:id |  list a single products via id
POST    |  /api/products     |  add new products
PUT     |  /api/products/:id |  update a specific product
DELETE  |  /api/products/:id |  delete a single product

parameters for post request
name,quantity,price
