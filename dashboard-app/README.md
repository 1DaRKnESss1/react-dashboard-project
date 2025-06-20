# Insurance Underwriting Dashboard

This is a front-end application built with React that serves as a user interface for an insurance underwriter. The project features two main screens: a comprehensive Dashboard for an at-a-glance overview and a detailed Account Page for in-depth analysis of a specific client.

This application was developed as a test assignment to demonstrate skills in creating complex, data-driven user interfaces with a component-based architecture, responsive design, and interactive elements.

**[Live Demo]** (insert_your_deployment_link_here)

## 🖼️ Screenshots

*(It is recommended to add screenshots of the Dashboard and Account pages here)*

## ✨ Key Features

The project fully implements the required functionality, simulating a real-world underwriting workbench.

#### Dashboard Page (`/`)
- **Navigation:** A global navigation bar with highlighting for the active page.
- **Work Queue:** A task table with tab-based filtering (`useState` for state management).
- **Portfolio Goals:** A set of custom progress bars and indicators to track high-level portfolio targets.
- **Quick Actions:** A panel with buttons for common user actions.
- **Market Intelligence:** A widget displaying the latest market news.
- **My Accounts Table:** A detailed, sortable table of all accounts, featuring search, status indicators, and color-coded data tags for quick visual analysis.

#### Account Page (`/accounts`)
- **Dynamic Header & Breadcrumbs:** A header with client-specific information and breadcrumb navigation.
- **Modular Components:** The page is built from numerous distinct components, each handling a specific piece of information:
  - **Performance Metrics & Policies:** High-level overview cards.
  - **Account Status & Compliance:** Stepper components to visualize workflow progression.
  - **Account Details (Winnability):** A complex, multi-part component for deep analysis, including charts, progress bars, and AI-powered recommendations.
  - **Communication:** A mail-like widget to display message history.
  - **Policies Table:** A detailed data grid showing all policies related to the account.
- **Interactivity:** Dropdown menus on action buttons in tables provide access to more options.
- **Responsiveness:** All pages and key components are designed to adapt to smaller screen sizes, such as tablets.

## 🛠️ Tech Stack

- **React:** The core library for building this component-based user interface.
- **React Router (`react-router-dom`):** Used for client-side routing between the Dashboard and Account pages.
- **React Hooks (`useState`):** Used for managing local component state, such as active tabs and interactive menus.
- **React Icons:** A comprehensive icon library used throughout the application to enhance UI clarity.
- **Vite:** A modern front-end build tool that provides a fast development environment.
- **Vanilla CSS:** All styling is done with pure CSS3, utilizing modern features like Flexbox, Grid Layout, and pseudo-elements for custom UI controls.

## 🤖 AI Tools Usage

As encouraged by the assignment, an AI assistant (GPT model, Gemini) was actively used throughout the development process for:
- Iterative development and refactoring of React components.
- Generating JSX markup and CSS styles based on visual mockups.
- Structuring and writing mock data in JSON format.
- Answering technical questions, debugging, and finding optimal solutions.
- Generating and refining this `README.md` file.

## 🚀 Getting Started

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1.  **Clone the repository:**
    ```bash
    git clone [your_repository_link]
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd [folder_name]
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## 📁 Project Structure

The project utilizes a logical and scalable folder structure to separate concerns.
```
/src
|-- /components     # All reusable UI components (AccountStatus, PoliciesTable, etc.)
|-- /data           # Mock data in JSON format
|-- /pages          # Page-level components (DashboardPage, AccountPage)
|-- App.css         # Global styles for the main App component
|-- App.jsx         # The root component with routing logic
|-- main.jsx        # The application's entry point
```