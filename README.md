
# Personal Blog App

## Description

The **Personal Blog App** is a full-stack application where users can create, read, update, and delete blog posts. The app supports role-based access, where admins can manage all posts, while regular users can only create and manage their own content.

## Features

- Admin can:
  - Manage all users and posts.
  - Perform CRUD operations on any post.
- Users can:
  - Create, edit, and delete their own posts.
  - View all published blog posts.
- Secure login system using JWT for authentication.
- MongoDB as the database.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React, CSS
- **Database**: MongoDB
- **Environment**: Local (with `.env` for configuration)

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) installed locally or access to a MongoDB cloud database.
- A `.env` file with the following variables:
  - `MONGO_URI`: Your MongoDB connection string.
  - `PORT`: The port number on which the app will run (optional, defaults to 7890).

### Installation


1. Navigate to the project directory:

   ```bash
   cd PersonalBlogApp
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and configure the required environment variables as listed above.

4. Start the MongoDB service:

   ```bash
   mongod
   ```

5. Run the app:

   ```bash
   npm start
   ```


