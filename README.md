# 🏨 PrimeLodgeBookify

PrimeLodgeBookify is a full-featured hotel booking platform designed to provide a seamless and user-friendly experience for travelers and hotel owners alike. Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js), this project showcases modern UI/UX design principles, secure authentication, dynamic room filtering, and interactive features to streamline the hotel reservation process.

📍 **Live Site**: [PrimeLodgeBookify Live Link](https://modern-hotel-bookings.web.app/)

---

## 🚀 Main Features

## 🔑 Key Features:
User Authentication: Secure login and registration using Firebase Auth.

Room Listing & Filtering: Search, filter, and view available rooms by type (e.g., Single, Double, Suite) with real-time availability.

Interactive Map Integration: View hotel locations using Leaflet.js with markers and popups for enhanced user navigation.

Admin Dashboard: Hotel admins can add, edit, or delete room listings and manage bookings.

Booking System: Users can check room details and book rooms with confirmation tracking.

Responsive Design: Fully optimized for desktop and mobile using Tailwind CSS and DaisyUI.

### 🔍 Explore Listings

- Browse available listings by:
  - Location, rent, availability
  - Lifestyle & roommate preferences
  - Room/property type (single, shared, apartment, etc.)

### 🔒 Secure Matching & Contact System

- Firebase-authenticated users only
- Privacy-first messaging & saved favorites
- Real-time updates when rooms are booked or canceled

### 📅 Room Booking & Smart Cancellation

- Book any available room via calendar modal
- Cancelation allowed up to 1 day before move-in
- Room status updates automatically

### 👤 User Dashboard

- Manage your:
  - Listings
  - Favorites
  - Bookings
  - Canceling
  - Booking Date update

### 🎨 Rich UI/UX

- Responsive design (mobile-first)
- Smooth animations with **Framer Motion**
- Modern map integration with **React Leaflet**
- Clean modals using `<dialog>` via DaisyUI

---

## ⚙️ Tech Stack

### 🔧 Frontend

- `React.js` with `Vite`
- `Tailwind CSS` + `DaisyUI`
- `Framer Motion` (animation)
- `React Leaflet` (map)
- `Swiper.js` (carousel)
- `Firebase Hosting` for deployment

### 🧰 Backend & Auth

- `Node.js` + `Express.js` REST API
- `Firebase Authentication`
- `Firebase Firestore` / `Realtime Database`

### 🌟 What Makes It Stand Out:
Clean, responsive, and modern UI

Full CRUD functionality for hotel management

Networking integration knowledge in design considerations

A scalable structure suitable for future feature enhancements like payment integration or customer reviews

---

## 📦 Dependencies

- `@tailwindcss/vite`
- `axios`
- `firebase`
- `framer-motion`
- `leaflet`
- `leaflet-defaulticon-compatibility`
- `lottie-react`
- `moment`
- `pigeon-maps`
- `react`
- `react-datepicker`
- `react-dom`
- `react-helmet`
- `react-icons`
- `react-leaflet`
- `react-lottie`
- `react-router`
- `react-simple-typewriter`
- `react-toastify`
- `sweetalert2`
- `swiper`
- `tailwindcss`

---

### 🖥️ Local Setup Guide

### 📁 Clone the repository on terminal or bash

- git clone https://github.com/MdNurulIslam99/prime-lodge-bookify-client-side.git
- cd created own folder name

### 📦 Install dependencies on terminal or bash

- npm install

### 🔐 Setup environment

- Create a .env file in the root and add your Firebase config:

- VITE_API_KEY=your_api_key
- VITE_AUTH_DOMAIN=your_auth_domain
- VITE_PROJECT_ID=your_project_id
- VITE_STORAGE_BUCKET=your_storage_bucket
- VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
- VITE_APP_ID=your_app_id

### ▶️ Run the frontend app

- npm run dev

### 🖥️ Run the backend (if in separate repo)

- cd created own folder name
- npm install
- npm run dev

### 🔗 Useful Links

🔴 Live Site: https://modern-hotel-bookings.web.app/

🟡 Client Repository: https://github.com/MdNurulIslam99/prime-lodge-bookify-client-side

🔵 Server Repository: https://github.com/MdNurulIslam99/prime-lodge-bookify-server-side
