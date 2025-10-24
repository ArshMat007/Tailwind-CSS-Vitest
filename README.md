# My Vite React App

A modern React application built with Vite, featuring custom components, Tailwind CSS for styling, and Vitest for fast, reliable testing.

## Features

- **React 19**: Latest React with hooks and modern features.
- **Vite**: Fast build tool with Hot Module Replacement (HMR) for development.
- **React Query**: For efficient data fetching and state management (e.g., API calls).
- **Custom Components**:
  - `ExampleComponent`: A sample component for demonstration.
  - `FlowChart` (NoteFlowchart): Displays a flowchart/note visualization.
  - `PricingStats`: Shows pricing-related statistics.
  - `LoginForm`: A login form with username/password inputs, validation, and API-based authentication using a dummy API (https://dummyjson.com/auth/login).
  - `CounterDemo`: A demo component for counter functionality.
- **API Integration**: Includes a login API utility (`src/api/login.js`) for handling authentication requests.
- **Tailwind CSS**: Utility-first CSS framework for responsive, custom styling.
- **ESLint**: Configured for code quality and consistency.
- **Testing with Vitest**: Unit and integration tests using Vitest, integrated with Vite for speed. Includes tests for form validation, API mocking, and component behavior.

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation
1. Clone the repository and navigate to the project directory.
2. Install dependencies:
   ```
   npm install
   ```

### Development
Start the development server:
```
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Building for Production
Build the app for production:
```
npm run build
```
Preview the production build:
```
npm run preview
```

### Testing
Run tests with Vitest:
```
npm test
```
For a visual test UI (if configured):
```
npm run test:ui
```

## Project Structure

```
my-vite-app/
├── public/
│   └── vite.svg
├── src/      
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── CounterDemo.jsx
│   │   ├── ExampleComponent.jsx
│   │   ├── FlowChart.jsx
│   │   ├── LoginForm.jsx
│   │   └── PricingStats.jsx
│   ├── hooks/
│   │   └── useCounter.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── test/
│       ├── App.test.jsx
│       ├── example.test.jsx
│       ├── FlowChart.test.jsx
│       ├── LoginForm.test.jsx
│       ├── PricingStats.test.jsx
│       └── useCounter.test.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.cjs
├── eslint.config.js
└── README.md
```

## Styling

This project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`. Utility classes are applied directly in JSX for rapid UI development.

## Testing

Tests are written with Vitest and Testing Library for user-centric component testing. Test files are colocated with components (e.g., `App.test.jsx`, `LoginForm.test.jsx`). Includes async testing for API interactions with mocked fetch calls. Global setup is in `setupTests.js`.

## React Compiler

The React Compiler is enabled for optimized performance. See [React Compiler documentation](https://react.dev/learn/react-compiler) for details. Note: This may impact Vite dev & build performance.

## ESLint Configuration

ESLint is configured for React and modern JavaScript. For production apps, consider adding TypeScript with type-aware rules. See the [Vite React TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for TypeScript integration.

## Contributing

1. Follow the existing code style and component patterns.
2. Add tests for new features.
3. Run `npm run lint` before committing.

## License

This project is private and for personal use.
