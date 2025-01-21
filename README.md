# 📚 Rememberly 🧠

Rememberly is a full-stack application designed to help users manage and organize their digital content, such as documents, tweets, YouTube videos, and links. The application provides features for user authentication, content management, and sharing content with others.

## 🌟 Features

- **🔐 User Authentication**: Sign up and sign in with secure password validation.
- **📂 Content Management**: Add, view, and delete content (documents, tweets, YouTube videos, links).
- **🔗 Content Sharing**: Generate shareable links to allow others to view your content.
- **📱 Responsive UI**: Built with React and Tailwind CSS for a modern and responsive user interface.

## 🛠️ Technologies Used

### Frontend

- **⚛️ React**: A JavaScript library for building user interfaces.
- **📘 TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **🎨 Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **⚡ Vite**: A fast build tool for modern web projects.
- **🛣️ React Router**: A library for routing in React applications.

### Backend

- **🚀 Express.js**: A web application framework for Node.js.
- **🗄️ MongoDB**: A NoSQL database for storing user and content data.
- **🐘 Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **🔑 JSON Web Tokens (JWT)**: A standard for securely transmitting information between parties as a JSON object.
- **📜 Zod**: A TypeScript-first schema validation library.

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **MongoDB** (running locally or a connection string to a remote instance)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yaseen-kc/Rememberly.git
   cd Rememberly
   ```

2. **Install dependencies**

   Navigate to both the `backend` and `frontend` directories and install the required dependencies.

   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the `backend` directory with the following variables:

   ```env
   MONGO_URL=mongodb://localhost:27017/rememberly
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the backend server**

   From the `backend` directory, start the server:

   ```bash
   npm run dev
   ```

5. **Run the frontend development server**

   From the `frontend` directory, start the development server:

   ```bash
   npm run dev
   ```

6. **Access the application**

   Open your browser and navigate to `http://localhost:5173` to access the application.

## 📡 API Endpoints

### User Authentication

- **Sign Up**

  - **POST** `/api/v1/signup`
  - Request Body:
    ```json
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```
  - Constraints:
    - Username: 3-20 characters
    - Password: 8-20 characters, at least one uppercase, one lowercase, one number, and one special character.

- **Sign In**
  - **POST** `/api/v1/signin`
  - Request Body:
    ```json
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```
  - Response:
    ```json
    {
      "token": "jwt_token"
    }
    ```

### Content Management

- **Add Content**

  - **POST** `/api/v1/content`
  - Request Body:
    ```json
    {
      "type": "document" | "tweet" | "youtube" | "link",
      "link": "url",
      "title": "Title of doc/video",
      "tags": ["tag1", "tag2"]
    }
    ```

- **Fetch All Content**

  - **GET** `/api/v1/content`
  - Response:
    ```json
    {
      "content": [
        {
          "id": 1,
          "type": "document" | "tweet" | "youtube" | "link",
          "link": "url",
          "title": "Title of doc/video",
          "tags": ["tag1", "tag2"]
        }
      ]
    }
    ```

- **Delete Content**
  - **DELETE** `/api/v1/content`
  - Request Body:
    ```json
    {
      "contentId": "1"
    }
    ```

### Content Sharing

- **Generate Shareable Link**

  - **POST** `/api/v1/brain/share`
  - Request Body:
    ```json
    {
      "share": true
    }
    ```
  - Response:
    ```json
    {
      "hash": "shareable_hash"
    }
    ```

- **View Shared Content**
  - **GET** `/api/v1/brain/:shareLink`
  - Response:
    ```json
    {
      "username": "shared_user_username",
      "content": [
        {
          "id": 1,
          "type": "document" | "tweet" | "youtube" | "link",
          "link": "url",
          "title": "Title of doc/video",
          "tags": ["tag1", "tag2"]
        }
      ]
    }
    ```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](backend/LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the fast development setup.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
- [Zod](https://zod.dev/) for schema validation.

## 📧 Contact

For any questions or feedback, please reach out to [Yaseen KC](https://github.com/yaseen-kc).

---

Thank you for using Rememberly! We hope it helps you organize and share your digital content effectively. 🎉
