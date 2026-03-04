# inventory-management
This project is a backend-only Inventory Management System built using Node.js and Express.js.

# Base URL:
http://localhost:5000/api/inventory/getitems

1. Add New Item

POST /additem

Adds a new inventory item.

Request Body:

{
  "name": "Dell Inspiron 15",
  "category": "Electronics",
  "quantity": 8,
  "price": 55000
}

Response:

{
    {
    "id": 1,
    "name": "Dell Inspiron 15",
    "category": "Electronics",
    "quantity": 8,
    "price": 55000
  }
}

2. Get All Items

GET /

Returns all inventory items.

Example Request:

GET /api/inventory/getitems

Response:

{
  "data": [ ... ]
}

3. Get Single Item

GET /:id/getsingleitem

Fetch a specific inventory item by ID.

Example:

GET /api/inventory/1/getsingleitem

4. Update Item

PUT /:id/updateitem

Updates an existing inventory item.

Example:

PUT /api/inventory/1/updateitem

Request Body:

{
  "price": 60000,
  "quantity": 10
}

5. Delete Item

DELETE /:id/deleteitem

Deletes an item from inventory.

Example:

DELETE /api/inventory/1/deleteitem

6. Filter Items by Category

GET /?category=Electronics

Returns items belonging to a specific category.

Example:

GET /api/inventory/getitems?category=Electronics

7. Search Items by Name

GET /?search=laptop

Returns items that match the search keyword.

Example:

GET /api/inventory/getitems?search=laptop

8. Filter by Quantity

GET /?quantity=10

Returns items with quantity less than or equal to the given value.

Example:

GET /api/inventory/getitems?quantity=10