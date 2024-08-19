# ReactJS with Firebase Authentication Project
This project was created as part of the ReactJS with Firebase Authentication - React Level 2 course on Udemy. It showcases the integration of Firebase Authentication into a ReactJS application, implementing secure user authentication with a modern front-end framework.

## 🚀 Features

* __User Authentication:__


  * Sign-up and Sign-in functionality using Firebase Authentication.

  * Password reset and email verification.

  * OAuth-based social logins (Google, Facebook, etc.).

* Real-time Database Integration:

  * CRUD operations with Firebase Firestore.

  * Secure data handling with Firebase security rules.


* __Responsive Design:__


  * Fully responsive UI built with modern CSS and design principles.

  * Mobile-first design approach for optimal user experience across devices.


* __State Management:__


  * Efficient state management using React's Context API.

  * Clean and maintainable component structure.


## 🛠️ Technologies Used:

* __ReactJS__ - Front-end library for building user interfaces.

* __Firebase Authentication__ - Secure authentication service by Firebase.

* __Firebase Firestore__ - NoSQL cloud database for storing user data.

* __React Router__ - Routing library for managing navigation in the app.

* __CSS Modules__ - Modular and reusable styles for each component.

* __React Context API__ - For global state management across the app.


## 📚 Learning Outcomes

Through this project, I gained practical experience in:

* Implementing Authentication:

  * Learning how to set up and manage user authentication using Firebase, including handling edge cases such as password resets and email verifications.

* Integrating Firebase with React:

  * Understanding how to connect a React application with Firebase services like Firestore for real-time data handling.
  
* Managing State Effectively:

  * Utilizing React's Context API to manage global states efficiently across the application, ensuring a clean and maintainable codebase.

* Building Responsive UIs:

  * Applying CSS modules to create a responsive and modern user interface, enhancing the overall user experience.

## 🛠️ Installation and Setup

To run this project locally, follow these steps:

Clone the repository:


```bash
git clone https://github.com/yourusername/react-firebase-authentication.git
cd react-firebase-authentication
```
Install dependencies:

```
npm install
```

Configure Firebase:

Create a Firebase project in the Firebase Console.

Set up Firebase Authentication and Firestore.

Add your Firebase configuration to a .env file in the root directory:


```

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```
Run the project:
```
npm start
```
The application will be available at http://localhost:3000.
