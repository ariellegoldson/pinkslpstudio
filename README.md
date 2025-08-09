# SLP Pink Studio

A beautiful and intuitive scheduling & notes application designed specifically for Speech-Language Pathologists.

## ✨ Features

### 🏠 Dashboard
- **Garden Collage Hero** - Vintage-inspired welcome section with floating decorative stickers
- **Today's Overview** - Quick stats and at-a-glance session information
- **Quick Actions** - Fast access to common tasks (New Session, Add Student, View Schedule)

### 👥 Student Management  
- **Student Directory** - Grid view with search and filtering capabilities
- **Detailed Profiles** - Comprehensive student information with tabbed navigation
- **Progress Tracking** - Visual goal progress indicators and historical data
- **Notes Management** - Rich text session notes with auto-save functionality

### 📅 Schedule Management
- **Weekly Calendar View** - Clean 5-day grid (Monday-Friday) layout
- **Session Status Tracking** - Visual indicators for upcoming, completed, and missed sessions
- **Drag & Drop Rescheduling** - Intuitive session management
- **Time Conflict Detection** - Prevents scheduling conflicts

### 📊 Reports & Analytics
- **Progress Reports** - Track student advancement over time
- **Session Analytics** - Attendance and completion statistics
- **Goal Tracking** - Monitor IEP/therapy goal progress

## 🎨 Design System

### Color Palette
- **Pink**: Primary action color (`#f5bcd6`)
- **Sage**: Secondary/nature accent (`#7f988a`) 
- **Cream**: Background base (`#fbfaf7`)
- **Ink**: Text and content (`#374151`)

### Typography
- **Display**: Playfair Display (headings)
- **Serif**: Cormorant Garamond (elegant text)
- **Sans**: Inter (body text)
- **Script**: Great Vibes (decorative accents)

### Visual Elements
- **Stripe Backgrounds**: Pink/white vertical stripes for section headers
- **Sticker Components**: Floating decorative elements (watering can, bunny, key, ribbon)
- **Grain Texture**: Subtle background texture overlay
- **Card Design**: Rounded corners, soft shadows, glass morphism

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory  
cd slp-pink-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Server
The app will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx         # Dashboard
│   ├── students/        # Student management
│   ├── schedule/        # Calendar & scheduling  
│   ├── reports/         # Analytics & reports
│   └── settings/        # Application settings
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Navigation & layout components
│   └── decorative/      # Stickers & visual elements
└── styles/
    └── globals.css      # Global styles & design tokens
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Components**: Custom component library with Headless UI
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Playfair Display, Cormorant Garamond, Inter, Great Vibes)
- **State Management**: React hooks & context
- **Forms**: React Hook Form with Zod validation
- **Notifications**: React Hot Toast

## 🎯 Keyboard Shortcuts

- `N` - New Session
- `S` - Save current note
- `⌘K` - Quick search
- `Esc` - Close modals

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 **Mobile**: Touch-friendly interface, collapsible navigation
- 💻 **Tablet**: Optimized grid layouts, touch interactions  
- 🖥 **Desktop**: Full feature set, keyboard shortcuts

## 🚧 Roadmap

### Phase 1: Core Features ✅
- Navigation & routing
- Dashboard with garden theme
- Student CRUD operations  
- Basic scheduling interface

### Phase 2: Enhanced Functionality (Next)
- Database integration with Prisma
- Rich text editor for notes
- Advanced scheduling features
- Goal tracking system

### Phase 3: Advanced Features (Planned)
- Report generation & analytics
- Calendar integrations  
- Data export capabilities
- Multi-therapist support

### Phase 4: Polish & Performance (Planned)
- Performance optimizations
- Accessibility improvements
- Mobile app (React Native)
- Offline functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Built with 💖 for Speech-Language Pathologists**