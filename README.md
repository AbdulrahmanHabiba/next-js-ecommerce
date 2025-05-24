# Next.js E-Commerce Application

## Overview

This is a **fully dynamic** e-commerce application built with **Next.js** and powered by a **Strapi** backend. Users can browse programming courses, add them to their cart, and complete purchases with secure payments. The app features a modern, premium UI/UX, and uses the **Context API** for global state management (user, cart, orders) without the need for Redux.

> **Note:**  
> Static data is currently used because the free deployment period for the Strapi backend has expired. Once the API is reactivated, you can easily switch back to dynamic data.

## Live Demo

🔗 [Live Application](https://next-js-ecommerce-liard.vercel.app/)

## Features

- **User Authentication:** Powered by **Clerk** (sign up, login, logout)
- **Product Management:** Browse and purchase programming courses
- **Cart System:** Add/remove courses dynamically (Context API)
- **Secure Payments:** Integrated with **Stripe**
- **Email Notifications:** Order confirmations via **React Email**
- **Smooth Animations:** With **Framer Motion**
- **Modern UI:** **Tailwind CSS**, glassmorphism, dark theme, and **Hyper UI** components

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Strapi** (Headless CMS)
- **Context API**
- **SQLite** (Strapi DB)
- **Clerk** (Auth)
- **Stripe** (Payments)
- **React Email** / **Resend** (Emails)
- **Tailwind CSS** / **Hyper UI** (Styling)
- **Framer Motion** (Animations)
- **Lucide Icons**

## Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/AbdulrahmanHabiba/next-js-ecommerce
   cd nextjs-ecommerce
   ```

2. **Install Dependencies:**

   ```bash
   yarn install  # or npm install
   ```

3. **Set Up Environment Variables:**  
   Create a `.env.local` file in the root directory and add:

   ```env
   NEXT_PUBLIC_STRAPI_TOKEN=your_strapi_token
   NEXT_PUBLIC_STRAPI_API_URL=your_strapi_backend_url

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   NEXT_PUBLIC_STRIPE_PUBLISHER_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key

   RESEND_API_KEY=your_resend_api_key
   ```

4. **Start the Development Server:**

   ```bash
   yarn dev  # or npm run dev
   ```

5. **Access the Application:**  
   Open [http://localhost:3000](http://localhost:3000)

## API Endpoints (Backend - Strapi)

- **Get all products:** `GET /api/products`
- **Get a single product:** `GET /api/products/:id`
- **Get user cart:** `GET /api/carts/:userId`
- **Add item to cart:** `POST /api/carts`
- **Remove item from cart:** `DELETE /api/carts/:id`
- **Get user orders:** `GET /api/orders/:userId`
- **Place an order:** `POST /api/orders`

🔗 Strapi API Base URL: https://strapi-ecommerce-production-f8fb.up.railway.app/api

## License

This project is licensed under the **MIT License**.
