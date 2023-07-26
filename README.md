Live at : https://my-short-url.netlify.app/

# URL Shortener Application

The URL Shortener Application is a web-based platform that allows users to generate shortened URLs for long web addresses. Developed using Spring Boot for the backend and React for the frontend, the application provides a user-friendly interface for URL shortening and seamless redirection to original URLs.

## Features

- Shorten long URLs to generate user-friendly and shareable short URLs.
- Seamlessly redirect users to the original long URLs when they access the short URLs.
- Validate user-inputted URLs to ensure correctness and prevent invalid URL mappings.
- Secure communication between frontend and backend using CORS configuration.
- Continuous deployment of frontend and backend for quick updates and availability.

## Tech Stack

The application is built using the following technologies:

- Frontend:
  - React: A JavaScript library for building user interfaces.
  - Axios: A popular HTTP client library for making API requests.

- Backend:
  - Spring Boot: A Java framework for building web applications.
  - Spring Web: For creating RESTful APIs.
  - Spring Data JPA: For data access and database interactions.
  - MySQL: A relational database for storing URL mappings.

- Deployment:
  - Netlify: For hosting and deploying the React frontend.
  - AWS EC2: For hosting and deploying the Spring Boot backend.
  - Let's Encrypt: For SSL certificate installation and enabling HTTPS.

## Getting Started

To run the application locally, follow these steps:

### Prerequisites

- Node.js and npm for running the frontend application.
- Java 8 or higher and MySQL for the backend application.

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/url-shortener.git
   ```

2. Navigate to the frontend directory:

   ```bash
   cd url-shortener/frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the frontend application:

   ```bash
   npm start
   ```

   The frontend application will run on `http://localhost:3000`.

### Backend Setup

1. Ensure you have Java 8 or higher and MySQL installed.

2. Clone the repository (if you haven't already):

   ```bash
   git clone https://github.com/your-username/url-shortener.git
   ```

3. Navigate to the backend directory:

   ```bash
   cd url-shortener/backend
   ```

4. Update `application.properties` with your MySQL database configuration:

   ```properties
   spring.datasource.url=jdbc:mysql://your-mysql-host:your-mysql-port/your-database-name
   spring.datasource.username=your-username
   spring.datasource.password=your-password
   ```

5. Build the backend application:

   ```bash
   ./mvnw clean package
   ```

6. Run the backend application:

   ```bash
   java -jar target/url-shortener.jar
   ```

   The backend application will run on `http://localhost:8080`.

### Deployment

The frontend application will be deployed automatically to Netlify on each push to the `master` branch. The backend application will be deployed to the AWS EC2 instance using your preferred deployment method (e.g., CI/CD pipeline).

## Contribution

Contributions to the URL Shortener Application are welcome! If you find any issues or want to add new features, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

