# IndiaDataHub - Data Catalogue & Analytics Dashboard

A high-performance React application built with Vite, featuring a secure login gateway and a dynamic product catalogue. This project handles large datasets efficiently using memoization and local pagination.

## 🔗 Project Links
- **Live Demo:** [Deploy Link Here](https://react-assignment-for-india-data-hub-theta.vercel.app/)
- **Repository:** [GitHub Repo Link Here](https://github.com/Sumit01-tech/React-Assignment-for-IndiaDataHub.git)

## 🛠️ Tech Stack
- **Frontend:** React 19 + Vite (for ultra-fast development and bundling)
- **Styling:** Tailwind CSS (Utility-first CSS)
- **Icons:** Lucide React (Tree-shakable vector icons)
- **Routing:** React Router DOM v7 (Client-side navigation)
- **Data:** Static JSON (Optimized processing for large records)

## 📂 Project Structure
```text
indiadatahub/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI Components
│   │   ├── Navbar.jsx   # Shared header with Login/Profile toggle
│   │   ├── Sidebar.jsx  # Categorized navigation
│   │   ├── DataTable.jsx# Dynamic grid for records
│   │   └── Pagination.jsx# 10-record per page logic
│   ├── data/            # JSON Datasets
│   │   ├── response1.json (India)
│   │   └── response2.json (IMF)
│   ├── pages/           # Page-level components
│   │   ├── Login.jsx    # Authentication entry
│   │   └── Dashboard.jsx# Main catalogue view
│   ├── App.jsx          # Routing configuration
│   ├── main.jsx         # App entry & Context providers
│   └── index.css        # Global styles & Tailwind directives
├── package.json         # Project dependencies
└── vite.config.js       # Vite configuration

Getting Started (Local Setup)
1. Clone the Repo -> git clone https://github.com/Sumit01-tech/React-Assignment-for-IndiaDataHub.git
2. Install React+Vite -> npm install Vite@latest indiadatahub
3. Start Development Server -> npm run dev
The app will be running at http://localhost:5173
4. Build for Production -> npm run build

⚡ Performance Features
Data Memoization: Utilizes useMemo to handle large IMF datasets, ensuring the UI remains responsive during sorting and filtering.

Efficient Pagination: Implements logic to load and render only 10 records at a time, drastically reducing DOM nodes and memory usage.

Modular Architecture: Shared Navbar uses conditional rendering via props to maintain UI consistency between Login and Dashboard without code duplication.
