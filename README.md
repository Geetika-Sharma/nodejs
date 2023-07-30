# Node.js
Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It uses the V8 JavaScript engine, developed by Google for the Chrome web browser, to execute JavaScript code on the server-side, enabling server-side scripting. This makes it possible to build scalable, high-performance, and real-time applications using JavaScript, which was traditionally limited to client-side web development.

## Table of Contents
- [Features](#features)
- [Initialize a Node Project](#initialize-a-node-project)
- [Run your program](#run-your-program)
- [Installing Dependencies and node package manager](#installing-dependencies-and-node-package-manager)
- [Postman and Nodemon ](#postman-and-nodemon)
- [Intro to JSON (JavaScript Object Notation)](#intro-to-json-javascript-object-notation)
- [Mongoose and MongoDB](#mongoose-and-mongodb)
- [Exception Handling](#exception-handling)
- [Environment File](#environment-file)
- [Mongo DB Connection and Save Data](#mongodb-connection-and-saving-data)
- [res.send() vs res.json()](#ressend-vs-resjson)
- [Parameterized URLs and Query String Parameters ](#parameterized-urls-and-query-string-parameters)
- [CRUD operations in MongoDB](#crud-operations-in-mongodb)

### Features
Here are some key features and aspects of Node.js:

1. **Asynchronous and Non-Blocking I/O:**
   Node.js is designed with an event-driven, non-blocking I/O model. It means that the server can handle multiple concurrent connections efficiently without waiting for one operation to complete before moving to the next one. This makes Node.js particularly well-suited for applications that require high concurrency and real-time interactions.

2. **Package Manager (NPM):**
   Node.js comes with the Node Package Manager (NPM), which is one of the largest software registries in the world. NPM allows developers to discover, share, and use open-source JavaScript packages and libraries. It simplifies dependency management and makes it easy to integrate third-party modules into Node.js projects.

3. **CommonJS Modules:**
   Node.js uses the CommonJS module system for organizing and structuring code. This system allows developers to create reusable modules that can be loaded into other modules using the `require()` function and exported using `module.exports`.

4. **Web Servers and RESTful APIs:**
   With Node.js, developers can easily create web servers and build RESTful APIs. The built-in `http` module enables developers to handle HTTP requests and responses, making it possible to create custom server logic.

5. **Express.js Framework:**
   Express.js is a popular web application framework for Node.js. It builds on top of the `http` module and provides a more robust and feature-rich set of functionalities to create web applications and APIs. It simplifies routing, middleware implementation, and request/response handling.

6. **Real-Time Applications:**
   Due to its event-driven architecture, Node.js is often used for real-time applications, such as chat applications, gaming servers, and collaboration tools, where low-latency communication is essential.

7. **Command-Line Tools (CLI):**
   Node.js is commonly used to build command-line tools and scripts. Developers can use Node.js to create powerful and cross-platform CLI applications that automate tasks or provide utilities for development workflows.

8. **Streaming Data:**
   Node.js provides native support for streams, which allows developers to work with data in chunks, making it highly efficient for processing large datasets or handling files.

9. **Scalability and Performance:**
   Node.js's event-driven, non-blocking architecture enables it to handle a large number of concurrent connections with low resource consumption, making it scalable and performant.

### Initialize a Node Project
To initialize a Node.js project, you'll need to use the Node Package Manager (NPM) or Yarn (an alternative package manager). The process involves creating a `package.json` file, which holds metadata about your project, its dependencies, and other configurations. Here's a step-by-step guide on how to do it using NPM:

1. **Open Your Terminal:**
   - On Windows, you can use the Command Prompt or PowerShell. On macOS and Linux, you can use the Terminal.

2. **Create a Project Directory:**
   - Create a new folder where you want to initialize your Node.js project. You can do this using the `mkdir` command (e.g., `mkdir my-node-project`).

3. **Navigate to the Project Directory:**
   - Use the `cd` command to navigate into the project directory you just created (e.g., `cd my-node-project`).

4. **Initialize the Project:**
   - To initialize the project and create a `package.json` file, run the following command:
     ```
     npm init
     ```
     NPM will prompt you to provide information about your project, such as the project name, version, description, entry point (usually `index.js`), author, license, etc. You can either fill in the details or press "Enter" to accept the default values.

5. **Install Dependencies (Optional):**
   - If your project requires external packages or libraries, you can install them using NPM. For example, to install the Express.js framework, you can run:
     ```
     npm install express
     ```
     This will create a `node_modules` folder and add Express.js as a dependency in the `package.json` file.

6. **Create Your Entry Point (index.js, app.js, etc.):**
   - Based on the entry point you specified during the project initialization (usually `index.js`), create the main file for your Node.js application. This file will be the starting point of your application.

Your Node.js project is now initialized and ready to be developed. You can start writing your Node.js code in the entry point file and create additional files and directories as needed for your project structure. If you installed any external dependencies, you can start using them in your code.

### Run your program
To add a start command in the `package.json` file and run it, follow these steps:

1. **Edit `package.json`:**
   - Open the `package.json` file in your Node.js project directory. You can do this using a text editor or your preferred Integrated Development Environment (IDE).

2. **Add the Start Script:**
   - In the `scripts` section of `package.json`, add a new entry for the start command. For example, if your entry point file is named `index.js`, you can add the following line:
     ```json
     "scripts": {
       "start": "node index.js"
     }
     ```
     This defines a start script that will run `node index.js` when you execute the `npm start` command.

3. **Save `package.json`:**
   - Save the changes you made to the `package.json` file.

4. **Run the Start Command:**
   - Now that the start script is defined in `package.json`, you can run it using NPM. Open your terminal or command prompt, navigate to your project directory (where `package.json` is located), and run the following command:
     ```
     npm start
     ```
     This will execute the start script you defined, which, in this case, runs the `index.js` file with the Node.js runtime.

5. **Verify the Start Script:**
   - Ensure that your `index.js` file contains the necessary code to start your Node.js application. For example, if you're using Express.js, the `index.js` file would typically set up the Express app and start the server.

That's it! The `npm start` command will now run your Node.js application using the script you defined in the `package.json` file.

### Installing dependencies and node package manager
1. **Install Dependencies:**
   - If your project has any external dependencies (e.g., libraries, frameworks), you can install them using NPM. For example, to install the Express.js framework, you can run the following command:
     ```
     npm install express
     ```
     This will download the Express.js package and its dependencies and save them in the `node_modules` folder within your project directory. The dependencies will also be added to your `package.json` file under the `"dependencies"` section.

6. **Use Dependencies in Your Project:**
   - Once the dependencies are installed, you can use them in your Node.js project. For example, if you installed Express.js, you can create an `index.js` file and use it to create an Express server.

Remember to include the `node_modules` directory in your `.gitignore` file if you are using version control like Git to avoid unnecessary repository bloat.

### Postman and Nodemon 
These are two separate tools that are commonly used in Node.js development:

1. **Postman:**
   - Postman is a popular collaboration platform and API development tool that allows developers to design, test, and document APIs. It provides an easy-to-use graphical user interface to send HTTP requests to your API endpoints and inspect the responses. Postman supports various request types (GET, POST, PUT, DELETE, etc.), allows you to set request headers and parameters, and lets you work with response data in a convenient manner. It is especially useful for testing and debugging APIs during development.

2. **Nodemon:**
   - Nodemon is a development tool used to monitor changes in your Node.js application's files and automatically restart the Node.js server when changes are detected. This saves you from manually stopping and restarting the server every time you make changes to your code. Nodemon is particularly helpful during development as it speeds up the development process, allowing you to see the changes you made immediately without needing to restart the server manually.

In summary, Postman is an API client tool that helps you interact with and test APIs, while Nodemon is a development tool that automates the process of restarting your Node.js server during development.

To use them:

1. **Postman:**
   - To start using Postman, you can download and install the Postman application from the official website (https://www.postman.com/downloads/). Once installed, open Postman and start creating API requests to test your endpoints.

2. **Nodemon:**
   - To use Nodemon, you need to have Node.js and NPM installed on your system. If you haven't installed Nodemon globally, you can do so using the following NPM command:
     ```
     npm install -g nodemon
     ```
     After installing Nodemon, navigate to your Node.js project directory in the terminal and start your Node.js application using Nodemon instead of the regular `node` command:
     ```
     nodemon app.js
     ```
     Nodemon will now monitor changes in your project files and automatically restart the server whenever you make modifications.

### Intro to JSON (JavaScript Object Notation)
JSON, which stands for JavaScript Object Notation, is a lightweight and widely used data interchange format. It is a text-based format that is easy for humans to read and write, and at the same time, it is easy for machines to parse and generate. JSON is often used for data transmission between a server and a web application as an alternative to XML.

Here are some key points about JSON:

1. **Data Format:**
   - JSON represents data as key-value pairs, similar to JavaScript objects. The data is stored in attribute-value pairs, where the attribute (also known as key) is a string, and the value can be a string, number, boolean, array, object, or null.

2. **Syntax:**
   - JSON syntax resembles JavaScript object literal notation. It uses curly braces `{}` to define objects and square brackets `[]` to define arrays. Attributes are represented as strings followed by a colon (`:`), and values are separated by commas. JSON keys must be enclosed in double quotes.

   Example of a simple JSON object:
   ```json
   {
     "name": "John Doe",
     "age": 30,
     "isStudent": false
   }
   ```

3. **Data Types:**
   - JSON supports the following data types:
     - Strings: `"Hello, World"`
     - Numbers: `42` or `3.14`
     - Booleans: `true` or `false`
     - Arrays: `[1, 2, 3]` or `["apple", "banana", "orange"]`
     - Objects: `{"name": "Alice", "age": 25}`
     - Null: `null`

4. **Nested Data:**
   - JSON allows nesting data structures, such as arrays of objects or objects containing other objects.

   Example of an array of objects in JSON:
   ```json
   [
     { "name": "John", "age": 30 },
     { "name": "Alice", "age": 25 }
   ]
   ```

   Example of an object containing another object in JSON:
   ```json
   {
     "name": "John",
     "address": {
       "city": "New York",
       "zipCode": "10001"
     }
   }
   ```

5. **Data Interchange:**
   - JSON is language-agnostic, meaning it can be used with programming languages other than JavaScript. It has become the standard for data interchange between web servers and web clients, as well as between different parts of web applications.

6. **Parsing JSON:**
   - In JavaScript, you can parse JSON strings into JavaScript objects using `JSON.parse()`. Conversely, you can convert JavaScript objects into JSON strings using `JSON.stringify()`.

   Example of parsing JSON in JavaScript:
   ```javascript
   const jsonString = '{"name": "John", "age": 30}';
   const jsonObject = JSON.parse(jsonString);
   console.log(jsonObject.name); // Output: "John"
   ```

### Mongoose and MongoDB:
- Mongoose allows you to define data models and schemas for MongoDB collections, making it easier to work with data in a structured manner.
- With Mongoose, you can create, read, update, and delete (CRUD) data from MongoDB using JavaScript objects and functions, which abstract the complexity of interacting with the database directly.

MongoDB is a popular open-source NoSQL (Not Only SQL) database management system. It is designed to handle large volumes of unstructured or semi-structured data, making it well-suited for modern web applications and big data processing.

Key Features of MongoDB:

1. **Document-Oriented Database:**
   - MongoDB is a document-based database, which means it stores data in JSON-like documents. Each document is a record with its own set of key-value pairs, and collections contain multiple documents. This flexible schema allows you to store data without the need for a fixed structure.

2. **NoSQL Database:**
   - As a NoSQL database, MongoDB diverges from the traditional relational database management systems (RDBMS). It does not rely on a fixed schema or the use of SQL for querying. Instead, it provides a flexible data model and uses BSON (Binary JSON) for data storage.

3. **Scalability and Performance:**
   - MongoDB is designed to be horizontally scalable, allowing you to distribute data across multiple servers or clusters. This horizontal scaling provides increased performance and handling of large-scale data requirements.

4. **Indexing and Querying:**
   - MongoDB supports indexing, which enables efficient querying and searching of data. It also offers powerful query capabilities, including support for complex queries, aggregations, and geospatial queries.

5. **High Availability and Fault Tolerance:**
   - MongoDB provides replication and automatic failover to ensure high availability and fault tolerance. Replication allows you to maintain multiple copies of your data across different servers, and if the primary server fails, a secondary server can automatically take over.

6. **Schema Migration and Evolution:**
   - Since MongoDB does not enforce a strict schema, it allows for easier schema migration and evolution over time. You can add or modify fields in documents without impacting the rest of the data.

7. **JSON-Like Query Language:**
   - MongoDB uses a query language that is similar to JSON to perform database operations, making it easy to work with and understand.

8. **Community and Ecosystem:**
   - MongoDB has a large and active community, which contributes to its development and support. It also has a rich ecosystem with various tools, drivers, and libraries available for different programming languages and frameworks.

To use MongoDB in your Node.js application, you can use the `mongoose` library, as mentioned in the previous response. Mongoose provides an Object Data Modeling (ODM) interface for MongoDB, making it easier to work with the database in a structured manner.

### Exception Handling
In Node.js, the `try...catch` statement is used to handle errors and exceptions that might occur during the execution of a block of code. It allows you to gracefully handle errors and prevent them from crashing your application. The basic syntax of `try...catch` looks like this:

```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
}
```

Here's how `try...catch` works in Node.js:

1. The code inside the `try` block is the part where you anticipate a potential error or exception. This could be a function call, database query, or any other piece of code that might fail under certain conditions.

2. If an error occurs within the `try` block, the execution of the block is immediately halted, and the control jumps to the corresponding `catch` block.

3. The `catch` block is responsible for handling the error. The error object (usually named `error` or `err`) contains information about the error, such as its type, message, and stack trace.

4. After the `catch` block is executed, the program continues running from the point immediately after the `try...catch` statement.

Here's an example of how to use `try...catch` in a Node.js application:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error.message);
}
```

In this example, the `divide` function attempts to divide two numbers. If the divisor (`b`) is 0, it throws an error using the `throw` statement. In the `try...catch` block, we call the `divide` function with arguments `10` and `0`. Since dividing by zero is not allowed, an error will be thrown, and the `catch` block will be executed, printing the error message to the console.

### Environment File
An environment file, often referred to as an ".env" file, is a configuration file used to store environment variables for a software application. These variables are key-value pairs that hold sensitive or environment-specific information, such as API keys, database connection strings, or any other configuration data.

The ".env" file is typically placed in the root directory of the project, and it is not meant to be committed to version control systems like Git. Instead, developers create a ".env.example" file that contains a list of all the required environment variables with default values or placeholders. This ".env.example" file is committed to version control to serve as documentation for the necessary environment variables.

Here's an example of how an ".env" file might look:

```plaintext
DB_HOST=localhost
DB_PORT=27017
DB_NAME=my_database
SECRET_KEY=my_secret_key
API_KEY=abc123xyz456
DEBUG=true
```

In the above example, we have defined several environment variables:

- `DB_HOST`: The hostname of the database server.
- `DB_PORT`: The port number for the database server.
- `DB_NAME`: The name of the database to connect to.
- `SECRET_KEY`: A secret key used for encryption or authentication purposes.
- `API_KEY`: An API key used for accessing external services.
- `DEBUG`: A boolean flag indicating whether the application is in debug mode.

To use the environment variables in your Node.js application, you can use a package like `dotenv` to load the variables from the ".env" file into the application's process environment. First, you need to install `dotenv`:

```bash
npm install dotenv
```

Then, at the beginning of your application (usually in the entry point file, like "app.js" or "index.js"), add the following code:

```javascript
require('dotenv').config();
```

Now, you can access the environment variables anywhere in your application using `process.env`:

```javascript
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const secretKey = process.env.SECRET_KEY;
const apiKey = process.env.API_KEY;
const isDebug = process.env.DEBUG === 'true';
```

The `dotenv` package reads the ".env" file and sets the environment variables defined there into `process.env`, allowing you to use them throughout your application. Make sure to add the ".env" file to your ".gitignore" file to prevent it from being accidentally committed to version control.

### MongoDB Connection and Saving Data
To create a MongoDB connection and save data from a Node.js application, you'll need to follow these steps:

1. **Install Required Packages:**
   - First, make sure you have installed the necessary packages. You'll need `mongodb` to interact with MongoDB and `dotenv` to manage environment variables as described in the previous answer. Install them using:
     ```
     npm install mongodb dotenv
     ```

2. **Create MongoDB Connection:**
   - Create a new file (e.g., "db.js") to set up the MongoDB connection. In this file, you'll use the `mongodb` package to connect to your MongoDB database. Make sure to replace the MongoDB connection URL and database name with your actual values.

   ```javascript
   // db.js

   const { MongoClient } = require('mongodb');
   require('dotenv').config();

   const url = process.env.DB_URL; // Replace with your MongoDB connection URL
   const dbName = process.env.DB_NAME; // Replace with your database name

   async function connectToDB() {
     try {
       const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
       const db = client.db(dbName);
       console.log('Connected to MongoDB');
       return db;
     } catch (error) {
       console.error('Error connecting to MongoDB:', error);
       throw error;
     }
   }

   module.exports = connectToDB;
   ```

3. **Create .env File:**
   - Create a ".env" file in the root of your project and add the MongoDB connection URL and database name to it.

   ```plaintext
   DB_URL=mongodb://localhost:27017
   DB_NAME=my_database
   ```

4. **Using the MongoDB Connection:**
   - Now, you can use the MongoDB connection in your main application file (e.g., "app.js" or "index.js") to perform database operations.

   ```javascript
   // app.js

   const express = require('express');
   const connectToDB = require('./db');
   const app = express();

   // Middleware to parse JSON data
   app.use(express.json());

   // Define a POST route to save data to MongoDB
   app.post('/api/customers', async (req, res) => {
     try {
       // Get the MongoDB connection
       const db = await connectToDB();

       // Access the 'customers' collection
       const collection = db.collection('customers');

       // Extract data from the request body
       const { name, email } = req.body;

       // Create a new document to insert
       const newCustomer = { name, email };

       // Insert the document into the collection
       await collection.insertOne(newCustomer);

       res.status(201).json({ message: 'Customer saved successfully' });
     } catch (error) {
       console.error('Error saving customer:', error);
       res.status(500).json({ error: 'Internal server error' });
     }
   });

   // Start the server
   const PORT = 3000;
   app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

5. **Test the Endpoint:**
   - With the MongoDB connection and the POST route defined, you can now test your application. Run your Node.js server using `node app.js` and use tools like Postman or cURL to send a POST request to `http://localhost:3000/api/customers` with a JSON payload containing `name` and `email` fields. The data will be saved in the MongoDB database.

### res.send() vs res.json()
In Express.js, both `res.send()` and `res.json()` are methods used to send responses to clients in the form of JSON data. However, there are some key differences between the two methods based on the data they handle and how they respond to the client.

1. **`res.send()`**:
   - The `res.send()` method is a general-purpose method for sending responses to clients. It can handle various types of data, including strings, HTML, JSON, and binary data. When you use `res.send()` to send JSON data, Express will automatically set the appropriate `Content-Type` header to `application/json`.
   - The method's behavior is flexible, and it will attempt to determine the data type based on the data you provide. For example, if you pass an object or an array, Express will automatically convert it to JSON before sending the response.
   - Usage example:
     ```javascript
     app.get('/data', (req, res) => {
       const data = { name: 'John', age: 30 };
       res.send(data);
     });
     ```

2. **`res.json()`**:
   - The `res.json()` method is specifically designed for sending JSON-formatted responses. It only accepts JSON data as input and does not perform any additional conversions. When you use `res.json()`, it will always set the `Content-Type` header to `application/json`.
   - This method is more explicit and is preferred when you want to ensure that you are sending JSON data, especially in cases where you might need to send non-JSON data types like strings or numbers.
   - Usage example:
     ```javascript
     app.get('/data', (req, res) => {
       const data = { name: 'John', age: 30 };
       res.json(data);
     });
     ```

In summary, both `res.send()` and `res.json()` can be used to send JSON data in Express.js. If you want to send JSON data explicitly, `res.json()` is a more suitable choice. However, if you are sending various types of data and want Express to automatically handle the `Content-Type` header, `res.send()` is more flexible and will still send JSON data properly when an object or an array is passed as the response.

### Parameterized URLs and Query String Parameters 
These are two different methods for passing data to the server in HTTP requests, especially in the context of web APIs and web applications.

1. **Parameterized URLs:**
   - Parameterized URLs are URLs that contain placeholders or variables that can be replaced with specific values to customize the request. These placeholders are typically denoted by curly braces `{}` in the URL.
   - In Express.js, you can define parameterized URLs using colons `:` followed by the parameter name. When a request is made to such a URL, Express will extract the parameter values and make them available in the `req.params` object.
   - Example of a parameterized URL in Express.js:
     ```javascript
     // Route with a parameterized URL
     app.get('/users/:userId', (req, res) => {
       const userId = req.params.userId; // Access the userId parameter
       // Use the userId to fetch user data from the database or perform other actions
       res.send(`User ID: ${userId}`);
     });
     ```
   - Requesting this URL, e.g., `http://example.com/users/123`, would result in the `req.params.userId` being set to `123`.

2. **Query String Parameters:**
   - Query string parameters are a way of passing data to the server by appending key-value pairs to the end of the URL after a question mark `?`. Multiple parameters are separated by ampersands `&`.
   - In Express.js, you can access query string parameters from the `req.query` object. Express automatically parses the query string and makes the values available as an object.
   - Example of using query string parameters in Express.js:
     ```javascript
     app.get('/search', (req, res) => {
       const query = req.query.q; // Access the 'q' parameter from the query string
       // Perform search operation based on the 'q' parameter
       res.send(`Search Query: ${query}`);
     });
     ```
   - Requesting this URL, e.g., `http://example.com/search?q=apple`, would result in the `req.query.q` being set to `'apple'`.

In summary, parameterized URLs and query string parameters both provide ways to pass data to the server in HTTP requests. Parameterized URLs are useful when you want to embed variables directly into the URL structure, while query string parameters are suitable for passing key-value pairs as part of the URL. The choice between them depends on the specific use case and the desired URL structure for your application.

### CRUD Operations in MongoDB
Sure! Let's go through examples of MongoDB CRUD (Create, Read, Update, Delete) operations using the `mongodb` package in a Node.js application. For this example, we'll assume you already have a MongoDB connection set up, as shown in the previous responses.

1. **Create (INSERT) Operation:**

```javascript
app.post('/api/products', async (req, res) => {
  try {
    // Get the MongoDB connection
    const db = await connectToDB();

    // Access the 'products' collection (replace with your collection name)
    const collection = db.collection('products');

    // Extract product data from the request body
    const { name, price } = req.body;

    // Create a new product document
    const newProduct = { name, price };

    // Insert the new product into the collection
    const result = await collection.insertOne(newProduct);

    res.status(201).json(result.ops[0]);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

2. **Read (GET) Operation:**

```javascript
app.get('/api/products/:id', async (req, res) => {
  try {
    // Get the MongoDB connection
    const db = await connectToDB();

    // Access the 'products' collection (replace with your collection name)
    const collection = db.collection('products');

    // Extract the product ID from the request parameters
    const productId = req.params.id;

    // Convert the string productId to a MongoDB ObjectId
    const objectId = new ObjectId(productId);

    // Find the product by ObjectId
    const product = await collection.findOne({ _id: objectId });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error retrieving product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

3. **Update (PUT) Operation:**

```javascript
app.put('/api/products/:id', async (req, res) => {
  try {
    // Get the MongoDB connection
    const db = await connectToDB();

    // Access the 'products' collection (replace with your collection name)
    const collection = db.collection('products');

    // Extract the product ID from the request parameters
    const productId = req.params.id;

    // Convert the string productId to a MongoDB ObjectId
    const objectId = new ObjectId(productId);

    // Extract updated product data from the request body
    const { name, price } = req.body;

    // Create an update object
    const updateProduct = { $set: { name, price } };

    // Update the product by ObjectId
    const result = await collection.updateOne({ _id: objectId }, updateProduct);

    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

4. **Delete (DELETE) Operation:**

```javascript
app.delete('/api/products/:id', async (req, res) => {
  try {
    // Get the MongoDB connection
    const db = await connectToDB();

    // Access the 'products' collection (replace with your collection name)
    const collection = db.collection('products');

    // Extract the product ID from the request parameters
    const productId = req.params.id;

    // Convert the string productId to a MongoDB ObjectId
    const objectId = new ObjectId(productId);

    // Delete the product by ObjectId
    const result = await collection.deleteOne({ _id: objectId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

In these examples, we assumed a collection named "products" in the database. Replace `'products'` with the actual name of your MongoDB collection. Also, remember to add proper error handling, validation, and authentication to make your application secure and robust.

