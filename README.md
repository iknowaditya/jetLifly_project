
# JetLifly - Private Jet Booking Website

JetLifly is a modern private jet booking platform that allows users to explore and book from a wide range of luxury private jets. Built using a full-stack approach, JetLifly integrates a sleek frontend with a robust backend system, leveraging REST APIs and MongoDB for data storage. The platform also uses animations and transitions powered by Framer Motion, enhancing the overall user experience

## Tech Stack

### Frontend:
- **React.js**: The frontend of JetLifly is built with React, a powerful library for building user interfaces.
- **Framer Motion**: Adds dynamic animations for better user interaction.
- **Axios**: Handles HTTP requests to communicate with the backend REST APIs.
- **React-Hot-Toast**: For displaying user notifications such as successful booking requests or errors.

### Backend:
- **Node.js**: The backend runs on Node.js for handling server-side logic.
- **Express.js**: A web framework for Node.js that simplifies API creation and routing.
- **MongoDB**: A NoSQL database used to store user booking requests and jet information.
- **RESTful APIs**: The backend exposes REST API endpoints to handle booking requests, user requests, and jet data fetching.

### Other Tools:
- **dotenv**: For handling environment variables securely.
- **CORS**: Configured to allow secure communication between the frontend and backend servers.## Features

- **Jet Selection**: Users can browse through a variety of private jets, each with detailed information including specifications, images, and availability.
- **Booking Requests**: Users can submit requests for jet bookings through a simple form that sends the data to the backend for processing.
- **User-Friendly UI**: The website provides a clean and intuitive user interface, ensuring an easy navigation experience for users.
- **Responsive Design**: JetLifly is designed to be fully responsive, providing a seamless experience on mobile, tablet, and desktop devices.
- **Smooth Animations**: Framer Motion is integrated to provide a smooth and dynamic experience with modern animations.
- **Notifications**: React-Hot-Toast is used to notify users about successful form submissions, errors, and important messages.
- **REST API**: The backend uses REST APIs to handle booking requests and fetch jet data, making it efficient and scalable.
- **MongoDB Integration**: MongoDB is used to store all the booking data, user information, and jet details in a secure and flexible way.# Acknowledgements 🖤

We would like to express our gratitude to the following technologies and open-source projects that contributed to the development of **JetLifly**:

### 🔥 Core Technologies
- **React.js** - For providing an elegant solution to building dynamic, user-friendly interfaces.
- **Node.js & Express** - For enabling scalable and robust backend development with REST APIs.
- **MongoDB** - For its flexibility in handling large datasets and providing a seamless NoSQL experience.
  
### 🎨 Design & Animations
- **Framer Motion** - For giving our website smooth, modern animations that enhance the user experience.
  
### 📦 Utility Libraries
- **Axios** - For simplifying our API requests and handling HTTP methods with ease.
- **dotenv** - For ensuring secure access to our environment variables.

### 🙌 Special Thanks
We would also like to thank:
- **React-Hot-Toast** - For quick and user-friendly notifications.
- Our beta users and the tech community for providing invaluable feedback during development.

🖤 *"Crafting an elegant experience in every interaction."* 
## Installation

To get started with the **JetLifly** application, follow these steps to set up the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher) installed
- [MongoDB](https://www.mongodb.com/) installed locally or accessible via a cloud provider like MongoDB Atlas

### Setup Instructions

1. **Clone the Repository**

   Clone the repository from GitHub to your local machine:

   ```bash
   git clone https://github.com/your-username/JetLifly.git
   cd JetLifly
## API Reference

The **JetLifly** application provides several RESTful API endpoints to manage user authentication, assets, liabilities, and net worth calculations. Below is a detailed reference of the available endpoints.

### Authentication

- **POST /api/auth/register**
  
  Register a new user.

  **Request Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }

## Authors

- [Hanu Singh](https://github.com/iknowaditya)


## Badges


![Build Status](https://img.shields.io/github/workflow/status/your-username/net-worth-calculator/CI)
![Test Coverage](https://img.shields.io/codecov/c/github/iknowaditya/net-worth-calculator)
![License](https://img.shields.io/github/license/iknowaditya/net-worth-calculator)

## Screenshots


![Screenshot 2024-09-15 235902](https://github.com/user-attachments/assets/a96e3cf4-285a-41ac-8299-ac70f28591d7)

## Usage

JetLifly is designed to make booking private jets simple and efficient, whether for business trips, luxury vacations, or exclusive events. Here are some use cases:

- Business Travel: Companies can quickly request a jet for corporate travel, ensuring that executives can arrive on time with a premium experience.
- Luxury Vacations: Users can explore various jet options for luxurious and private vacations around the globe.
- Event Transportation: For special events like weddings, conferences, or high-profile gatherings, JetLifly provides the means to secure private air travel for guests.
- Last-Minute Bookings: JetLifly enables users to make last-minute private jet bookings, accommodating urgent needs for personal or professional reasons.
- VIP Experiences: Tailored to customers looking for an elite, personalized travel experience, JetLifly offers a selection of high-end jets to match the prestige.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI=your_mongodb_connection_string`

`JWT_SECRET=your_jwt_secret`


## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Contributing

We welcome contributions to the **JetLifly ** project! If you would like to contribute, please follow these guidelines:

### How to Contribute

1. **Fork the Repository**: Start by forking the repository to your own GitHub account. This will create a copy of the project where you can make your changes.

2. **Clone Your Fork**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/your-username/JetLifly .git
   cd JetLifly 
