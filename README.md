<div align="center">

# 📹 SnapCast

### Next-Generation Video Sharing Platform

**Create • Record • Share • Discover**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

[Live Demo](https://snap-cast-taos.vercel.app/) • [Report Bug](https://github.com/monu808/SnapCast/issues) • [Request Feature](https://github.com/monu808/SnapCast/issues)

</div>

---

## 🌟 Overview

**SnapCast** is a modern, full-stack video sharing platform that revolutionizes how you create, share, and discover video content. Built with cutting-edge technologies and designed for the modern web, SnapCast offers a seamless experience for both content creators and viewers.

### 🎯 What Makes SnapCast Special?

- 🎥 **Built-in Screen Recording** - Capture and share your screen instantly
- ⚡ **Lightning Fast** - Powered by Next.js 15 with Turbopack
- 🔒 **Enterprise Security** - Arcjet protection with rate limiting and bot detection
- 🌍 **Global CDN** - Fast video delivery worldwide via Bunny CDN
- 📱 **Fully Responsive** - Perfect experience on all devices
- 🎨 **Modern UI/UX** - Intuitive design with custom Satoshi font


---

## ✨ Features

### 🎥 Video Management

- **Upload & Share** - Upload videos with custom thumbnails, titles, and descriptions
- **Screen Recording** - Built-in screen recorder with one-click capture
- **Video Player** - Custom player with advanced controls and playback options
- **Auto Thumbnails** - Automatic thumbnail generation from video content
- **Privacy Controls** - Public or private video visibility settings
- **View Analytics** - Track video views and engagement metrics

### 🔐 Authentication & Security

- **Google OAuth** - Secure sign-in with Google accounts
- **Session Management** - Persistent sessions with Better Auth
- **Rate Limiting** - Arcjet-powered API protection
- **Bot Detection** - Intelligent bot blocking and CAPTCHA
- **CSRF Protection** - Built-in security against attacks
- **Data Encryption** - Secure database with PostgreSQL

### 🎨 User Experience

- **Modern UI** - Clean, intuitive interface with Tailwind CSS
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Custom Fonts** - Premium Satoshi font family
- **Search & Filter** - Advanced search with multiple filters
- **Pagination** - Smooth navigation through video library
- **User Profiles** - Personalized profiles with avatars

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Custom Components** - Reusable component library

### Backend
- **Next.js API Routes** - Full-stack API
- **PostgreSQL** - Neon serverless database
- **Drizzle ORM** - Type-safe database queries
- **Better Auth** - Modern authentication
- **Edge Runtime** - Fast API responses

### Infrastructure
- **Bunny CDN** - Global video delivery
- **Arcjet** - Security & rate limiting
- **Vercel** - Serverless deployment
- **Neon DB** - Serverless PostgreSQL

---


## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- **Node.js 18+** installed
- **PostgreSQL** database (we recommend [Neon](https://neon.tech/))
- **Google OAuth** credentials ([Get them here](https://console.cloud.google.com/))
- **Bunny CDN** account for video storage ([Sign up](https://bunny.net/))
- **Arcjet API** key for security ([Get started](https://arcjet.com/))

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/shivaammmmpatel/SnapCast.git
   cd SnapCast
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   # Base URL
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   
   # Better Auth
   BETTER_AUTH_SECRET=your_random_secret_here
   BETTER_AUTH_URL=http://localhost:3000
   
   # Google OAuth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   
   # Neon Database
   DATABASE_URL=postgresql://user:password@host/database
   
   # Bunny CDN
   BUNNY_STORAGE_ACCESS_KEY=your_storage_key
   BUNNY_LIBRARY_ID=your_library_id
   BUNNY_STREAM_ACCESS_KEY=your_stream_key
   
   # Arcjet Security
   ARCJET_API_KEY=your_arcjet_key
   ```

4. **Set up the database**

   ```bash
   npm run db:push
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## � Project Structure

```plaintext
SnapCast/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Authentication pages
│   │   └── sign-in/         # Sign-in page
│   ├── (root)/              # Main application
│   │   ├── page.tsx         # Home/Dashboard
│   │   ├── upload/          # Video upload
│   │   ├── profile/         # User profiles
│   │   └── video/           # Video player
│   ├── api/                 # API routes
│   │   └── auth/            # Better Auth endpoints
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── header.tsx           # Navigation header
│   ├── VideoCard.tsx        # Video thumbnail card
│   ├── VideoPlayer.tsx      # Custom video player
│   ├── RecordScreen.tsx     # Screen recorder
│   └── ...                  # Other components
├── lib/                     # Utilities & configs
│   ├── actions/             # Server actions
│   │   └── video.ts         # Video CRUD operations
│   ├── hooks/               # Custom React hooks
│   ├── auth.ts              # Better Auth config
│   ├── auth-client.ts       # Auth client setup
│   └── utils.ts             # Helper functions
├── drizzle/                 # Database layer
│   ├── db.ts                # Database connection
│   ├── schema-postgres.ts   # PostgreSQL schema
│   └── migrations/          # DB migrations
├── public/                  # Static assets
│   └── assets/              # Images, icons, fonts
├── fonts/                   # Custom Satoshi fonts
└── scripts/                 # Utility scripts
```

---

## 🎯 Key Workflows

### Upload a Video

1. Click **"Upload"** in the navigation
2. Choose **"Record Screen"** or **"Upload File"**
3. Add title, description, and thumbnail
4. Set visibility (Public/Private)
5. Click **"Upload"** to publish

### Record Your Screen

1. Navigate to **Upload** page
2. Click **"Record Screen"**
3. Select screen/window to record
4. Click **Start Recording**
5. Stop when done and proceed to upload

### Manage Videos

- View all videos on the **Home** page
- Filter by newest, oldest, or most viewed
- Search videos by title
- Click on a video to watch
- Access your videos from your **Profile**

---

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start dev server with Turbopack
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Database
npm run db:push          # Push schema changes to database
npm run db:studio        # Open Drizzle Studio (DB GUI)
npm run db:generate      # Generate migrations
npm run db:migrate       # Run migrations

# Utilities
npm run seed             # Seed database with sample data
```

---


## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Fork this repository** to your GitHub account

2. **Import to Vercel**
   - Go to [Vercel](https://vercel.com/new)
   - Import your forked repository
   - Vercel will auto-detect Next.js

3. **Set Environment Variables**
   
   Add all required environment variables in Vercel dashboard:
   - `BETTER_AUTH_URL` = `https://your-domain.vercel.app`
   - `NEXT_PUBLIC_BASE_URL` = `https://your-domain.vercel.app`
   - `DATABASE_URL` = Your Neon database URL
   - Add all other variables from `.env`

4. **Update Google OAuth**
   
   Add your Vercel domain to Google OAuth:
   - Authorized JavaScript origins: `https://your-domain.vercel.app`
   - Authorized redirect URIs: `https://your-domain.vercel.app/api/auth/callback/google`

5. **Deploy!**
   
   Vercel will automatically deploy your app

### Environment Variables Checklist

Make sure these are set in your Vercel project:

- ✅ `BETTER_AUTH_URL`
- ✅ `BETTER_AUTH_SECRET`
- ✅ `NEXT_PUBLIC_BASE_URL`
- ✅ `DATABASE_URL`
- ✅ `GOOGLE_CLIENT_ID`
- ✅ `GOOGLE_CLIENT_SECRET`
- ✅ `BUNNY_STORAGE_ACCESS_KEY`
- ✅ `BUNNY_LIBRARY_ID`
- ✅ `BUNNY_STREAM_ACCESS_KEY`
- ✅ `ARCJET_API_KEY`

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

### Areas We Need Help

- � Bug fixes and improvements
- 📝 Documentation updates
- 🎨 UI/UX enhancements
- 🧪 Test coverage
- 🌐 Internationalization (i18n)
- ♿ Accessibility improvements

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

Special thanks to the amazing open-source projects that made SnapCast possible:

- [Next.js](https://nextjs.org/) - The React Framework for the Web
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM for SQL databases
- [Better Auth](https://better-auth.com/) - Authentication for Next.js
- [Arcjet](https://arcjet.com/) - Security and rate limiting
- [Bunny CDN](https://bunny.net/) - Global content delivery network
- [Neon](https://neon.tech/) - Serverless Postgres
- [Vercel](https://vercel.com/) - Platform for deploying Next.js apps

---

## 📧 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/monu808/SnapCast/issues)
- **Discussions**: [GitHub Discussions](https://github.com/monu808/SnapCast/discussions)
- **Live Demo**: [snap-cast-taos.vercel.app](https://snap-cast-taos.vercel.app/)

---

## ⭐ Show Your Support

If you find SnapCast useful, please consider giving it a star on GitHub! It helps the project grow and motivates us to keep improving.



---

<div align="center">

**Made with ❤️ by the SnapCast Team**

[Website](https://snap-cast-taos.vercel.app/) • [GitHub](https://github.com/shivammmmpatel/SnapCast) 

</div>


