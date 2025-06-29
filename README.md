# 🚀 Portfolio Website - Ida Bagus Gede Purwa Manik Adiputra

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS showcasing data engineering projects, web development work, and professional experience.

## 🌟 Features

### 🎨 **Modern Design**
- Clean, minimalist interface with dark/light mode toggle
- Smooth animations powered by Framer Motion
- Responsive design optimized for all devices
- Professional typography with Inter font

### 📱 **Interactive Components**
- Dynamic project filtering by categories (Data Engineering, Data Analytics, Web Development, etc.)
- Project modals with detailed descriptions and live links
- Animated sections with scroll-triggered animations
- Contact form with email integration

### 🗂️ **Content Sections**
- **Hero Section**: Personal introduction with animated profile picture
- **About**: Professional background and skills overview
- **Projects**: Filterable showcase of 11+ projects across multiple categories
- **Skills**: Comprehensive list of technical competencies
- **Publications**: Academic research and publications
- **Experience**: Professional timeline with organizations and roles
- **Contact**: Direct communication form

### 🛠️ **Technical Features**
- **Next.js 13+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Context** for state management
- **Email integration** with Resend
- **Responsive design** with mobile-first approach

## 🏗️ **Project Categories**

The portfolio includes projects across multiple domains:

- **Data Engineering** (3 projects): Enterprise platforms, ETL pipelines, cloud architectures
- **Data Analytics** (1 project): Business intelligence and data visualization
- **Web Development** (3 projects): Full-stack applications and responsive websites
- **Machine Learning** (1 project): NLP research and model comparison
- **Mobile Development** (1 project): Android news application
- **UI/UX Design** (1 project): User experience design and prototyping
- **Automation** (1 project): Web automation and testing tools

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18.0.0 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/idabaguspurwa/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 **Project Structure**

```
portfolio-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact form
│   ├── experience.tsx    # Experience timeline
│   ├── header.tsx        # Navigation header
│   ├── intro.tsx         # Hero section
│   ├── project.tsx       # Individual project card
│   ├── projects.tsx      # Projects section with filtering
│   ├── publications.tsx  # Publications section
│   ├── skills.tsx        # Skills showcase
│   └── ...
├── context/              # React Context providers
│   ├── active-section-context.tsx
│   └── theme-context.tsx
├── lib/                  # Utilities and data
│   ├── data.ts          # Project data and content
│   ├── hooks.ts         # Custom React hooks
│   ├── types.ts         # TypeScript type definitions
│   └── utils.ts         # Utility functions
├── public/              # Static assets
│   ├── images/          # Project screenshots
│   └── CV.pdf          # Resume/CV
└── actions/             # Server actions
    └── sendEmail.ts     # Email handling
```

## 🎯 **Key Components**

### Project Filtering System
- **Dynamic filtering** by project categories
- **Alphabetical sorting** for better organization
- **Responsive filter buttons** with active states
- **Real-time project updates** based on selected filters

### Project Modal System
- **Detailed project information** with comprehensive descriptions
- **Technology tags** for each project
- **Direct links** to GitHub repositories and live demos
- **Responsive image galleries** and project screenshots

### Contact Integration
- **Email form** with validation
- **Server-side email handling** using Resend API
- **Success/error feedback** for user interactions
- **Professional email templates**

## 🛠️ **Technologies Used**

### Frontend
- **Next.js 13+** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling and validation

### Backend
- **Next.js API Routes** - Serverless functions
- **Resend** - Email delivery service
- **React Email** - Email template system

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Vercel** - Deployment platform

## 📊 **Featured Projects**

### 🏢 Enterprise-Grade Sales & Marketing Data Platform
- **GCP-based** e-commerce analytics platform
- **Automated ELT pipelines** with Cloud Composer
- **Real-time dashboards** using Looker Studio
- **Technologies**: GCP, BigQuery, Airflow, dbt, Terraform

### 📈 Stock Market Data Pipeline
- **Apache Airflow** orchestration
- **Apache Spark** data processing
- **MinIO** object storage
- **Technologies**: Docker, Python, Real-time APIs

### 🏎️ F1 Racing Analytics Project
- **Azure Databricks** platform
- **Medallion architecture** implementation
- **Power BI** business intelligence
- **Technologies**: PySpark, Delta Lake, Azure

## 🚀 **Deployment**

### Vercel (Recommended)
1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main branch

### Manual Deployment
```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📧 **Contact**

**Ida Bagus Gede Purwa Manik Adiputra**
- 📧 Email: [ida.adiputra@outlook.com](ida.adiputra@outlook.com)
- 💼 LinkedIn: [https://www.linkedin.com/in/idabaguspurwa/](https://www.linkedin.com/in/idabaguspurwa/)
- 🐙 GitHub: [https://github.com/idabaguspurwa](https://github.com/idabaguspurwa)

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Next.js Team** for the amazing React framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Vercel** for seamless deployment
- **All open-source contributors** who made this project possible

---

<div align="center">
  <strong>Built with ❤️ using Next.js, TypeScript, and Tailwind CSS</strong>
</div>
