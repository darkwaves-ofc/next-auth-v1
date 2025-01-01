# Next Auth v1

A robust authentication service example built using Next.js and NextAuth.js. This project demonstrates how to implement secure user authentication, session management, and OAuth integrations in a modern Next.js application. Developed by Dark Waves.

---

## Features

- **Secure Authentication**: Implements secure user login with NextAuth.js.
- **Session Management**: Manage user sessions efficiently.
- **OAuth Integration**: Easily integrate with providers like Google, GitHub, and more.
- **Customizable**: Easily adaptable to your project's needs.

---

## Screenshots

![Banner](https://github.com/darkwaves-ofc/next-auth-v1/blob/bfea427604170ba4bc6d64f05104a8e97c8dd896/public/banner.png)

![Banner 2](https://github.com/darkwaves-ofc/next-auth-v1/blob/bfea427604170ba4bc6d64f05104a8e97c8dd896/public/banner2.png)

---
## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/darkwaves-ofc/next-auth-v1.git
   cd next-auth-v1
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and configure it with the following variables:

   ```env
   AUTH_SECRET=your_secret_key
   NEXT_PUBLIC_APP_URL=http://localhost:3000

   # OAuth Providers (example: Google)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret

   # OAuth Providers (example: Github)
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret

   # Email Service (Resend-https://resend.com/)
   RESEND_API_KEY=your_resend_api_key

   # Database (Prisma-MongoDB)
   DATABASE_URL=your_database_url
   ```

   Github and Google OAuth

   #### Github OAuth

   Link - https://github.com/settings/developers

   Homepage URL - YOUR DOMAIN

   Authorization callback URL - YOUR DOMAIN/api/auth/callback/github

   #### Google OAuth

   Link https://console.cloud.google.com/apis/credentials

   Homepage URL - YOUR DOMAIN

   Authorization callback URL - YOUR DOMAIN/api/auth/callback/google

4. **Run the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:3000`.

---

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Click on the login button to sign in using an OAuth provider like Google or GitHub.
3. Manage sessions and authenticated routes seamlessly.

---

## Folder Structure

```plaintext
next-auth-v1/
├── components/       # Reusable UI components
├── pages/            # Next.js pages
├── styles/           # Global CSS and styles
├── .env.example      # Environment variables example
├── public/           # Public assets
│   ├── banner.png    # Screenshot 1
│   └── banner2.png   # Screenshot 2
└── README.md         # Project documentation
```

---

## Technologies Used

- [Next.js](https://nextjs.org/) - React Framework for Production
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- [Tailwind CSS](https://tailwindcss.com/) - Utility-First CSS Framework
- [Resend](https://resend.com/) - Email Service
- [Prisma](https://www.prisma.io/) - Database ORM
- [MongoDB](https://www.mongodb.com/) - Database

---

## Contributing

Contributions are welcome! If you have suggestions or find a bug, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

Created by [Dark Waves](https://github.com/darkwaves-ofc).

---

## Links

- **Live Demo**: [TBD]
- **Repository**: [GitHub](https://github.com/darkwaves-ofc/next-auth-v1)
- **Documentation**: [NextAuth.js](https://next-auth.js.org/)

Happy Coding!

