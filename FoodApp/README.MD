
# Restaurant Food Category CRUD API

**Description**

This project is a backend application that performs all CRUD (Create, Read, Update, Delete) operations on a restaurant food category model. 
The application is built using Node.js and Express.js with MongoDB Atlas as the database and Postman for API testing.

**Table of Contents:** 
-Installation
-Usage
-API Endpoints
-Technologies Used
-Contributing

## Installation

   Clone the repository:
   git clone https://github.com/your-username/restaurant-food-category-api.git
   cd restaurant-food-category-api

   Install dependencies:
   npm install

   Set up environment variables:

   Create a `.enV` file in the root directory and add the following:

   ```bASH
   MONGO_URI=your_mongodb_atlas_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```
   Run the application:
   npm start
 
**Usage**
Once the server is running, you can use Postman or any other API testing tool to interact with the API. The base URL is:
http://localhost:5000/api/categories


## API Endpoints
- **GET /api/categories**: Get all categories
- **GET /api/categories/:id**: Get a specific category by ID
- **POST /api/categories**: Create a new category
- **PUT /api/categories/:id**: Update a category by ID
- **DELETE /api/categories/:id**: Delete a category by ID



## Technologies Used
- Node.js: JavaScript runtime environment
- Express.js: Web framework for Node.js
- MongoDB Atlas: Cloud-based NoSQL database
- Postman: API development and testing tool
- Mongoose: ODM for MongoDB and Node.js


## Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to fork the repository and submit a pull request.

