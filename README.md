
# Cardinal

Cardinal is a powerful and intuitive note-taking web application built using the MERN stack. It features a rich text editor, light and dark themes, user authentication, and more. Hosted on Vercel, Cardinal offers high fault tolerance and a beautiful user interface for a seamless note-taking experience.

# Live Demo

Explore the live demo: [ Cardinal live website ](https://cardinal-rho.vercel.app).

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Rich Text Editor**: Enhanced note-taking with advanced formatting options.
- **Light and Dark Themes**: Switch between light and dark modes for a comfortable user experience.
- **User Authentication**: Secure login and registration using JSON Web Tokens (JWT).
- **High Fault Tolerance**: Reliable performance and uptime.
- **Intuitive and Beautiful UI**: Easy-to-use interface designed with Tailwind CSS.
- **Search Note**: Easily search through notes.
- **Starred and Unstarred notes**: Intuitve star notes feature for prioritising important or favourite notes.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: Vercel

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rutamk/cardinal.git
   cd cardinal
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   cd frontend
   npm install
   cd ../backend
   npm install
   cd ..
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the `backend` directory and add the following variables:
   ```env
   ATLAS_DB_URL=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_jwt_secret
   ```

4. **Run the Application**:
   ```bash
   cd frontend/Cardinal
   npm run dev
   # In another terminal window
   cd ../backend
   npm start
   ```

## Usage
1. **Sign Up / Log In**: Create an account or log in with existing credentials.
2. **Create and Edit Notes**: Use the rich text editor to take and format notes.
3. **Switch Themes**: Dark and light themes are set according to User device preference.
4. **Manage Notes**: View, edit, and delete your notes as needed.

## Screenshots

SignUp Page:

![CleanShot 2024-07-17 at 14 46 27@2x](https://github.com/user-attachments/assets/10748a00-106e-4b4a-add1-f11b1662f3b1)

Login Page: 

![CleanShot 2024-07-17 at 14 46 39@2x](https://github.com/user-attachments/assets/960017db-c4e0-4c0a-9ad9-d04e4f3f8419)

Add/Edit Modal with Rich text editor:

![CleanShot 2024-07-17 at 14 50 52@2x](https://github.com/user-attachments/assets/e590eb95-d0b8-4655-b44c-42f391320d43)

Home page:

![CleanShot 2024-07-17 at 14 52 22@2x](https://github.com/user-attachments/assets/49493834-031c-41e8-b3c2-f2fec5914cbf)


## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## Contact
For questions or inquiries, please contact:
- **Name**: Rutam Kulkarni
- **Email**: rutam2003@gmail.com
- **GitHub**: [rutamk](https://github.com/rutamk)

---

Thank you for using Cardinal! We hope it enhances your note-taking experience.

---
