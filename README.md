# 📹 SnapCast

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**SnapCast** is a modern, feature-rich video sharing platform built with Next.js 15. Create, upload, share, and discover videos with an intuitive interface and powerful features. Think of it as a comprehensive video platform with screen recording capabilities, user authentication, and seamless video management.

## ✨ Key Features

### 🎥 **Advanced Video Management**
- **Upload & Share**: Upload videos with custom thumbnails and metadata
- **Screen Recording**: Built-in screen recording functionality with real-time capture
- **Video Player**: Custom video player with advanced playback controls
- **Thumbnail Generation**: Automatic thumbnail generation and custom thumbnail support
- **Video Analytics**: Track views, engagement, and performance metrics

### 🔐 **Robust Authentication System**
- **Google OAuth Integration**: Seamless sign-in with Google accounts
- **Session Management**: Secure session handling with Better Auth
- **User Profiles**: Personalized user profiles with avatar support
- **Role-based Access**: Protected routes and user-based permissions

### 🎨 **Modern User Experience**
- **Responsive Design**: Mobile-first approach with perfect mobile compatibility
- **Custom Fonts**: Optimized Satoshi font family for premium typography
- **Dark/Light Mode**: Adaptive theming for user preference
- **Infinite Scroll**: Smooth content discovery with pagination
- **Search & Filter**: Advanced search functionality with filtering options

### 🛡️ **Enterprise-Grade Security**
- **Rate Limiting**: Arcjet integration for API protection and DDoS prevention
- **Email Validation**: Advanced email validation with disposable email blocking
- **Bot Detection**: Intelligent bot detection and blocking
- **CSRF Protection**: Built-in security against cross-site request forgery
- **SQL Injection Prevention**: Parameterized queries with Drizzle ORM

### 🚀 **Performance & Scalability**
- **Turbopack**: Lightning-fast builds with Next.js Turbopack
- **Edge Runtime**: Optimized edge functions for global performance
- **CDN Integration**: Bunny CDN for global video delivery
- **Database Optimization**: Efficient queries with Drizzle ORM and PostgreSQL
- **Image Optimization**: Next.js Image component with lazy loading

## 🏗️ **Technical Architecture**

### **Frontend Stack**
- **Next.js 15**: Latest React framework with App Router
- **React 19**: Cutting-edge React features and performance
- **TypeScript 5**: Type-safe development with latest TS features
- **Tailwind CSS 4**: Utility-first CSS framework
- **Custom Components**: Modular, reusable component architecture

### **Backend & Database**
- **Next.js API Routes**: Full-stack API with Edge Runtime support
- **PostgreSQL**: Robust relational database
- **Drizzle ORM**: Type-safe database queries and migrations
- **Better Auth**: Modern authentication solution
- **Xata Integration**: Advanced database features and analytics

### **Infrastructure & Services**
- **Bunny CDN**: Global video delivery and storage
- **Arcjet Security**: API protection and rate limiting
- **Google OAuth**: Trusted authentication provider
- **Vercel Ready**: Optimized for Vercel deployment

## 🎯 **Why Choose SnapCast?**

### **For Developers**
- ✅ **Modern Tech Stack**: Built with the latest technologies and best practices
- ✅ **Type Safety**: Full TypeScript implementation for bug-free development
- ✅ **Scalable Architecture**: Clean, modular codebase that grows with your needs
- ✅ **Security First**: Enterprise-grade security built-in from day one
- ✅ **Performance Optimized**: Fast loading times and smooth user experience

### **For Users**
- ✅ **Intuitive Interface**: Clean, modern design that's easy to navigate
- ✅ **Fast & Reliable**: Quick video uploads and smooth playback
- ✅ **Mobile Friendly**: Perfect experience on all devices
- ✅ **Screen Recording**: Record and share your screen instantly
- ✅ **Secure & Private**: Your data is protected with advanced security measures

### **For Businesses**
- ✅ **Scalable Solution**: Handle thousands of users and videos
- ✅ **Global Delivery**: Fast video streaming worldwide
- ✅ **Analytics Ready**: Built-in tracking and performance metrics
- ✅ **Customizable**: Easy to brand and customize for your needs
- ✅ **Cost Effective**: Efficient infrastructure reduces operational costs

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- PostgreSQL database
- Google OAuth credentials
- Bunny CDN account (for video storage)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/shivammmmpatel/SnapCast.git
   cd SnapCast
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # NODE ENV
   NODE_ENV=development
   
   # BASE URL
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   
   # BETTER AUTH
   BETTER_AUTH_SECRET=your_auth_secret
   BETTER_AUTH_URL=http://localhost:3000
   
   # GOOGLE OAUTH
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   
   # DATABASE
   DATABASE_URL_POSTGRES=postgresql://user:password@localhost:xyza/snapcast
   
   # BUNNY CDN
   BUNNY_STORAGE_ACCESS_KEY=your_bunny_storage_key
   BUNNY_LIBRARY_ID=your_bunny_library_id
   BUNNY_STREAM_ACCESS_KEY=your_bunny_stream_key
   
   # ARCJET SECURITY
   ARCJET_API_KEY=your_arcjet_api_key
   ```

4. **Database Setup**
   ```bash
   # Run database migrations
   npm run db:migrate
   
   # Seed the database (optional)
   npm run seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 **Project Structure**

```
SnapCast/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (root)/            # Main application pages
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable React components
├── lib/                   # Utility functions and configurations
│   ├── actions/           # Server actions
│   ├── hooks/             # Custom React hooks
│   └── utils.ts           # Helper functions
├── drizzle/               # Database schema and migrations
├── public/                # Static assets
└── scripts/               # Utility scripts
```

## 🛠️ **Available Scripts**

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:migrate   # Run database migrations  
npm run db:studio    # Open Drizzle Studio
npm run seed         # Seed database with sample data
```

## 🤝 **Contributing**

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
- [Better Auth](https://better-auth.com/) - Authentication for Next.js
- [Arcjet](https://arcjet.com/) - Security and rate limiting
- [Bunny CDN](https://bunny.net/) - Global content delivery network



---


