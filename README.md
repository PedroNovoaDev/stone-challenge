
# Stone Challenge API

This API was developed as part of a challenge for a job position in Stone.
## Stack used

**Back-end:** Node, Express


## Running local

Clone the project

```bash
  git clone https://github.com/PedroNovoaDev/stone-challenge
```

Move to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Run the server

```bash
  npm start
```


## Environment variables

To run this project, you'll need to add the following env variables in your .env

`AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` / `AWS_REGION`

`JWT_SECRET`
## Endpoints

#### Creates a new user with name and password.
```http
  POST /add-new-user
```

| Body   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | User ID |
| `name` | `string` | User name |
| `password` | `string` | User password |



#### Searchs DynamoDB for a existing user by his ID.
```http
  GET /search-user-by-id/${id}
```

| Header   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `authorization`      | `string` | **Required**. Token provided in the creation of user |

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Required**. ID of the user to search |



#### Show Ton website visit count at the moment of the call.
```http
  GET /show-ton-visit-count
```

| Header   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `authorization`      | `string` | **Required**. Token provided in the creation of user |



#### Increment Ton website visit count at the moment of the call.
```http
  GET /increment-ton-visit-count
```

| Header   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `authorization`      | `string` | **Required**. Token provided in the creation of user |

## Documentation

[Swagger OpenApi documentation](https://app.swaggerhub.com/apis-docs/PedroNovoaDev/stone-challenge-api/1.0.0)