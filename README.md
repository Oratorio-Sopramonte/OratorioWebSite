# Oratorio Web Platform
Web site for the Oratorio, built with React and Vite.

## 📁 Repository Structure

```text
SitoWeb/
├── public/              # Static assets (favicons, etc.)
├── src/
│   ├── assets/          # Images and design assets
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/           # Page components (Home, Booking, Membership, etc.)
│   ├── App.jsx          # Main application routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles and design system
├── .gitignore           # Git exclusion rules
├── firebase.json        # Firebase Hosting configuration
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🛠️ Local Development

To run the project locally on your machine, use:
   ```bash
   npm run dev
   ```
The app will be available at `http://localhost:5173`.

## 🚀 Firebase Deployment

This project is configured for Firebase Hosting.

1. **Login to Firebase** (if not already done)
   ```bash
   firebase login
   ```

2. **Build the project**
   ```bash
   npm run build
   ```
   This creates a production-ready `dist` folder.

3. **Monitor / Select Project**
   If this is a new setup, run:
   ```bash
   firebase init hosting
   ```
   Choose the existing project and select `dist` as your public directory.

4. **Deploy to production**
   ```bash
   firebase deploy
   ```

## 🔒 Security Note
Sensitive configuration files like `.env` and `.firebaserc` are excluded from this repository via `.gitignore` to prevent leaking private credentials or project IDs.
