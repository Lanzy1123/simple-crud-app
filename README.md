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

| Method | Endpoint           | Description                    |
|--------|-------------------|--------------------------------|
| GET    | `/api/products`   | List all products              |
| GET    | `/api/products/:id` | Get a single product by ID   |
| POST   | `/api/products`   | Add a new product              |
| PUT    | `/api/products/:id` | Update a specific product    |
| DELETE | `/api/products/:id` | Delete a single product      |

## Parameters

### POST Request Body
```json
{
  "name": "string",
  "quantity": "number",
  "price": "number"
}
```
