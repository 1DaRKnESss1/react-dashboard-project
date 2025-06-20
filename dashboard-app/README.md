# Insurance Underwriting Dashboard - UI Implementation

This is a front-end application built with React that serves as a high-fidelity UI implementation of an insurance underwriter's workbench. The project features two main screens: a comprehensive Dashboard and a detailed Account Page, built to pixel-perfect standards based on the provided mockups.

This application was developed as a test assignment to demonstrate skills in creating complex, data-driven user interfaces with a focus on **layout quality, component-based architecture, responsive design, and interactive elements.**

**[Live Demo](https://react-dashboard-project-six.vercel.app)**

## ✨ Key Features & Implemented Components

The project visually implements all required UI blocks, simulating a real-world underwriting environment. The focus was on the visual and structural implementation rather than complex business logic.

#### Dashboard Page (`/`)
- **Global Navigation:** A responsive navigation bar with active state highlighting managed by `react-router-dom`.
- **Work Queue Component:** A UI for a task table demonstrating tab-based navigation for filtering data, managed with the `useState` hook.
- **Portfolio Goals Component:** A set of custom-styled progress bars and indicators to visually represent portfolio targets.
- **Quick Actions Component:** A panel layout with fully styled, interactive buttons.
- **Market Intelligence Component:** A UI widget for displaying a list of market news items.
- **My Accounts Table Component:** The layout for a detailed data grid, showcasing custom styling for status indicators, data tags, and interactive elements. Includes a functional front-end text search.

#### Account Page (`/accounts`)
- **Dynamic Header & Breadcrumbs:** A flexible header component that displays client-specific information and breadcrumb navigation.
- **Modular Component Suite:** The page is composed of numerous distinct components:
  - **Performance Metrics & Policies:** High-level overview cards with custom layouts.
  - **Account Status & Compliance:** Stepper components to visualize workflow progression.
  - **Account Details (Winnability):** A complex, multi-part component demonstrating deep nesting, data visualization (mock graphs, progress bars), and layout for AI-powered recommendations.
  - **Communication Component:** A mail-like widget to display a thread of messages with different states.
  - **Policies Table Component:** A detailed data grid layout with custom-styled cells, icons, and a summary footer.
- **UI Interactivity:** Dropdown menus on action buttons in tables are implemented to fulfill the "display additional information on click" requirement.
- **Responsiveness:** All pages and key complex components are designed to adapt to smaller screen sizes (tablets), fulfilling the "at least for two breakpoints" requirement.

## 🛠️ Tech Stack

- **React:** The core library for building this component-based user interface.
- **React Router (`react-router-dom`):** Used for client-side routing between the Dashboard and Account pages.
- **React Hooks (`useState`):** Used for managing local component state, such as active tabs and interactive menus.
- **React Icons:** A comprehensive icon library used throughout the application to enhance UI clarity.
- **Vite:** A modern front-end build tool that provides a fast development environment.
- **Vanilla CSS:** All styling is done with pure CSS3, utilizing modern features like Flexbox, Grid Layout, and pseudo-elements for custom UI controls.

## 🤖 AI Tools Usage

As encouraged by the assignment, an AI assistant (**Gemini Pro by Google**) was actively used throughout the development process for:
- Iterative development and refactoring of React components.
- Generating JSX markup and CSS styles based on visual mockups.
- Structuring and writing mock data in JSON format.
- Answering technical questions, debugging complex issues (Git, deployment), and finding optimal solutions.
- Generating and refining this `README.md` file.

## 🚀 Getting Started

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/1DaRKnESss1/react-dashboard-project.git](https://github.com/1DaRKnESss1/react-dashboard-project.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd react-dashboard-project/dashboard-app
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