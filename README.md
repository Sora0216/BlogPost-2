# Tech Blog CMS

## Description

Tech Blog CMS is a full-stack web application built using the Model-View-Controller (MVC) paradigm. It allows developers to publish articles, blog posts, and share their thoughts and opinions on various tech-related topics. Users can also comment on other developers' posts, creating a vibrant community for tech enthusiasts.

The application is built with the following technologies:
- Handlebars.js as the templating engine for the frontend.
- Sequelize as the ORM for database management.
- Express.js for the server and API.
- Express-session for handling user authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/tech-blog.git
    cd tech-blog
    ```

2. Install the required npm packages:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:

    ```plaintext
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    ```

4. Set up the database:

    - Log in to your PostgreSQL database and create the database:

    ```sql
    CREATE DATABASE your_database_name;
    ```

5. Seed the database with initial data (optional):

    ```bash
    npm run seed
    ```

6. Start the application:

    ```bash
    npm run start
    ```

   Alternatively, you can use `npm run dev` to start the application with Nodemon for automatic server restarts during development.

## Usage

Once the application is running, you can visit `http://localhost:3001` in your web browser to access the Tech Blog CMS. From the homepage, you can:

- View existing blog posts.
- Sign up for an account or log in if you already have one.
- Create new posts, edit or delete your existing posts from the dashboard.
- Comment on other developers' posts.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Post Management**: Logged-in users can create, edit, and delete their blog posts.
- **Commenting**: Users can comment on posts, fostering discussion and interaction.
- **Responsive Design**: The application is designed to be responsive and accessible on various devices.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please feel free to open an issue or submit a pull request.

## Tests

To run the tests, use the following command:

```bash
npm test
