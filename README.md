# Next.js E-Commerce Application

## Overview

This is a **fully dynamic** e-commerce application built with **Next.js** and powered by a **Strapi** backend. The platform allows users to browse programming courses, add them to their cart, and complete purchases using secure payment methods. The application provides a seamless shopping experience with a modern UI/UX.

The application also uses **Context API** to manage global state across the application, making it easy to share data like user information, cart details, and orders throughout the app without the need for prop drilling or external state management libraries like Redux.

## Live Demo

🔗 [Live Application](https://next-js-ecommerce-liard.vercel.app/)

## Features

- **User Authentication:** Powered by **Clerk**, enabling account registration and login.
- **Product Management:** Browse and purchase programming courses.
- **Cart System:** Add and remove courses dynamically with state management via **Context API**.
- **Cart System:** Add and remove courses dynamically.
- **Secure Payments:** Integrated with **Stripe** for seamless transactions.
- **Email Notifications:** Uses **React Email** to send order confirmations.
- **Smooth Animations:** Implemented with **Framer Motion** for an enhanced user experience.
- **Modern UI Components:** Utilizes **Tailwind CSS** and **Hyper UI**.

## Tech Stack

- **Next.js** (App Router)
- **TypeScript** (Strongly typed environment)
- **Strapi** (Headless CMS Backend)
- **Context API** (State Management)
- **SQLite** (Database for Strapi)
- **Clerk** (User authentication)
- **Stripe** (Online payments)
- **React Email** (Email notifications)
- **Tailwind CSS** (Styling framework)
- **Hyper UI** (UI components)
- **Framer Motion** (Animations)
- **Resend** (Email delivery service)
- **Lucide Icons** (Icon library)

## Installation & Setup

To run this project locally, follow these steps:

### 1. Clone the Repository:

```bash
git clone https://github.com/AbdulrahmanHabiba/next-js-ecommerce
cd nextjs-ecommerce
```

### 2. Install Dependencies:

```bash
yarn install  # or npm install
```

### 3. Set Up Environment Variables:

Create a `.env.local` file in the root directory and configure the required keys:

```env
NEXT_PUBLIC_STRAPI_TOKEN=<your_strapi_token>
NEXT_PUBLIC_STRAPI_API_URL=<your_strapi_backend_url>

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STRIPE_PUBLISHER_KEY=<your_stripe_publishable_key>
STRIPE_SECRET_KEY=<your_stripe_secret_key>

RESEND_API_KEY=<your_resend_api_key>
```

### 4. Start the Development Server:

```bash
yarn dev  # or npm run dev
```

### 5. Access the Application:

Once the server is running, open:

```
http://localhost:3000
```

## API Endpoints (Backend - Strapi)

### Products

- **Get all products:** `GET /api/products`
- **Get a single product:** `GET /api/products/:id`

### Carts

- **Get user cart:** `GET /api/carts/:userId`
- **Add item to cart:** `POST /api/carts`
- **Remove item from cart:** `DELETE /api/carts/:id`

### Orders

- **Get user orders:** `GET /api/orders/:userId`
- **Place an order:** `POST /api/orders`

🔗 Strapi API Base URL: https://strapi-ecommerce-production-f8fb.up.railway.app/api

## License

This project is licensed under the **MIT License**.

