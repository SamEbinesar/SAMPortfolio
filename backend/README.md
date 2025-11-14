# Portfolio Backend - SMTP Email Server

Backend server for handling contact form submissions via SMTP email.

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `backend` directory:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Server Configuration
PORT=5000
NODE_ENV=development
```

### 3. Gmail App Password Setup

Since Gmail requires app passwords for SMTP:

1. Go to your Google Account settings
2. Enable 2-Step Verification (if not already enabled)
3. Go to "App passwords" section
4. Generate a new app password for "Mail"
5. Use this app password as `SMTP_PASS` in your `.env` file

**Note:** Use your Gmail address as `SMTP_USER` and the generated app password as `SMTP_PASS`.

### 4. Start the Server

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

The server will run on `http://localhost:5000`

## API Endpoints

### POST `/api/send-email`

Sends an email via SMTP.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your work."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Email sent successfully!",
  "messageId": "..."
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message here"
}
```

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Email Configuration

The email will be sent to: **samebinesar2004@gmail.com**

The email includes:
- Sender's name
- Sender's email (as reply-to)
- Message content
- Formatted HTML template

## Troubleshooting

1. **"Authentication failed" error:**
   - Make sure you're using an app password, not your regular Gmail password
   - Verify 2-Step Verification is enabled

2. **"Connection timeout" error:**
   - Check your internet connection
   - Verify SMTP_HOST and SMTP_PORT are correct

3. **"Network error" in frontend:**
   - Make sure the backend server is running
   - Check CORS settings if accessing from different origin

## Production Deployment

For production:
1. Set `NODE_ENV=production` in `.env`
2. Use environment variables from your hosting platform
3. Consider using a dedicated email service (SendGrid, Mailgun, etc.) for better deliverability

