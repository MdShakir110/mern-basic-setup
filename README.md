# MERN Production-Ready Starter Project

This project is a high-performance, scalable, and secure MERN stack boilerplate designed for professional applications.

### 10-Point Project Summary:

1.  **Full-Stack Foundation**: Complete setup of React (Vite), Node.js, Express, and MongoDB (Mongoose) with a modular folder structure.
2.  **Advanced Styling**: Integrated **Tailwind CSS v4** with `@tailwindcss/postcss` configuration for modern, utility-first styling.
3.  **State Management**: Centralized store using **Redux Toolkit** with an `authSlice` pre-configured for authentication persistence.
4.  **Hardened Security**: Backend protected with `helmet`, `express-rate-limit`, `hpp`, and `mongo-sanitize` to prevent common web vulnerabilities.
5.  **Clean Backend Architecture**: Implemented an **asyncHandler** utility and a **Global Error Middleware** to manage exceptions and Mongoose errors gracefully.
6.  **Service Layer Pattern**: Business logic is separated into a dedicated `services/` layer, keeping controllers lean and maintainable.
7.  **Scalable Frontend Layouts**: Modular **MainLayout** and **AuthLayout** system using `react-router-dom` for consistent UI wrapping.
8.  **Professional Routing**: Set up **Protected Routes** for gated access, integrated directly with the Redux authentication state.
9.  **Form Validation & UI**: Combined **react-hook-form** with **Zod** schema validation and reusable, animated UI components (Button/Input).
10. **Rich UX & Animations**: Integrated **Framer Motion** for staggered entrance animations and **react-hot-toast** for global non-blocking notifications.

---

**Run Backend:** `cd server && npm run dev` | **Run Frontend:** `cd client && npm run dev`
