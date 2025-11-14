# Portfolio - React Vite Project

A modern, responsive portfolio website built with React and Vite, featuring a professional tech company UI design inspired by RPN Tech World, optimized for both desktop and mobile devices.

## Features

- 🎨 Modern tech company UI design with gradient effects
- 📱 Fully responsive for desktop and mobile views
- ⚡ Fast development with Vite
- 🎯 Smooth scrolling navigation
- 🎭 Beautiful animations and transitions
- 🌈 Professional color scheme (Cyan/Blue/Purple gradients)
- 📄 Multiple sections: Home, About, Skills, Projects, Contact, Others

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Gmail account (for SMTP email functionality)

### Installation

#### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

#### Backend Setup (For Contact Form Email)

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `backend` directory:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
PORT=5000
NODE_ENV=development
```

4. **Gmail App Password Setup:**
   - Go to your Google Account settings
   - Enable 2-Step Verification (if not already enabled)
   - Go to "App passwords" section
   - Generate a new app password for "Mail"
   - Use this app password as `SMTP_PASS` in your `.env` file

5. Start the backend server:
```bash
npm start
```

The backend server will run on `http://localhost:5000`

**Note:** The contact form requires the backend server to be running to send emails. Emails will be sent to `samebinesar2004@gmail.com`.

### Build for Production

```bash
cd frontend
npm run build
```

The built files will be in the `frontend/dist` folder.

### Preview Production Build

```bash
cd frontend
npm run preview
```

## Project Structure

```
Portfolio/
├── frontend/
│   ├── public/
│   │   ├── myph.jpg
│   │   ├── whatsapp.jpg
│   │   ├── instagram.jpg
│   │   ├── linkedin.png
│   │   ├── Sam_Resume (1).pdf
│   │   ├── vid.mp4
│   │   ├── weather.html
│   │   └── calcu.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Others.jsx
│   │   │   └── *.css files
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── package-lock.json
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env (create this file)
│   ├── env.example
│   └── README.md
├── NewPort/
│   └── (old portfolio files)
└── README.md
```

## Technologies Used

### Frontend
- React 18
- Vite
- CSS3 (with modern gradients and animations)
- HTML5

### Backend
- Node.js
- Express.js
- Nodemailer (for SMTP email)
- CORS
- dotenv (for environment variables)

## Design Features

- **Color Scheme**: Professional tech company palette
  - Primary: Deep blue/purple gradients (#0a0e27, #16213e, #0f3460)
  - Accent: Cyan/Blue (#00d4ff, #0097e6)
  - Secondary: Purple (#6c5ce7, #a29bfe)
  - Background: Dark themes with gradient overlays

- **UI Elements**:
  - Glassmorphism effects with backdrop blur
  - Gradient text and buttons
  - Smooth hover animations
  - Modern card designs with shadows
  - Responsive navigation with mobile menu

## Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (480px - 767px)
- Small Mobile (below 480px)

## Sections

1. **Home** - Introduction and profile with gradient background
2. **About** - Personal information and background
3. **Skills** - Technical skills showcase with hover effects
4. **Projects** - Portfolio projects with modern card design
5. **Contact** - Contact form with SMTP email functionality (sends to samebinesar2004@gmail.com)
6. **Others** - Address, map, and social links

## Contact Form Email Setup

The contact form uses SMTP to send emails automatically. For detailed setup instructions, see [backend/README.md](backend/README.md).

**Quick Setup:**
1. Configure SMTP credentials in `backend/.env`
2. Start the backend server: `cd backend && npm start`
3. The frontend will send form submissions to the backend API
4. Emails are automatically sent to `samebinesar2004@gmail.com`

## License

This project is open source and available for personal use.
