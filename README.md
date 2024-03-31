# food-delivery-dynamic-pricing-backendAPI

This is a Node.js application that provides a REST API for a food delivery service with a dynamic pricing module. The pricing module calculates the total cost of food delivery based on various factors such as distance, item type, and pricing structures defined by the organization.

## API Documentation

### Calculate Delivery Price

**POST** `/api/pricing/calculate`

This endpoint calculates the total price for the delivery of specified food items in a given zone for a particular organization.

#### Request Body

```json
{
  "zone": "central",
  "organizationId": "005",
  "totalDistance": 12000,
  "itemType": "perishable"
}
zone (string): The delivery zone.
organizationId (string): The ID of the organization.
totalDistance (number): The total distance for the delivery in meters.
itemType (string): The type of item, either "perishable" or "non-perishable".
Successful Response
json
Copy code
{
  "totalPrice": 2050
}
totalPrice (number): The total price for the delivery in cents.
Error Response
json
Copy code
{
  "error": "An error occurred while processing the request"
}
error (string): The error message describing the issue.
Test Suite
The project includes a test suite to ensure the proper functioning of the dynamic pricing module and the API endpoints. The tests cover major functionalities and edge cases.

To run the tests, execute the following command:

bash
Copy code
npm test
Setup Guide
Follow these steps to set up the project and the database locally:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/food-delivery-app.git
Install dependencies:

cd food-delivery-app
npm install
Set up the database:

Install and configure PostgreSQL on your local machine.
Create a new database for the project.
Update the database connection details in the config/database.js file.
Run database migrations:
npx sequelize-cli db:migrate
This command will create the necessary tables in the database based on the defined models.

Start the server:
npm start
The server will start running on http://localhost:3000.

Seed the database (optional):
If you want to seed the database with initial data for testing purposes, run the following command:

bash

npx sequelize-cli db:seed:all
This will populate the Organization, Item, and Pricing tables with sample data.

Now you can interact with the API endpoints using tools like Postman or curl, or integrate the API with a front-end application.

Make sure to check the config/database.js file and update the database connection details as per your local setup.

csharp

You can copy and paste this code into your README.md file in your GitHub repository.
