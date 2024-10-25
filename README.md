# Practice Next.js Project

A Next.js application built with TypeScript, Redux Toolkit, and TailwindCSS.

## 🚀 Features

- ⚡️ Next.js 15 with Page Router
- 🎯 TypeScript for type safety
- 📊 Redux Toolkit for state management
- 💾 Redux Persist for state persistence (Pending)
- 🎨 TailwindCSS for styling
- 📝 ESLint for code linting
- ✨ Prettier for code formatting
- 🐶 Husky for Git hooks
- 📋 Lint-staged for running checks on staged files

## 📦 Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn or pnpm

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/aruncse45/next-redux
cd practice-next
```

2. Install dependencies:
```bash
yarn install
```

## 🚀 Development

Start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Build

Create a production build:

```bash
yarn build
```

## 🚀 Production

Start the production server:

```bash
yarn start
```

The application will start on port 4000 by default.

## 🧑‍💻 Development Tools

### Code Style

- ESLint: `npm run lint`
- ESLint with auto-fix: `npm run lint:fix`
- Strict linting: `npm run lint:strict`
- Prettier formatting: `npm run prettier`

### Git Hooks

This project uses Husky for Git hooks:
- Pre-commit: Runs lint-staged to check staged files
- Pre-push: Runs type checking and linting

## 📁 Project Structure

```
practice-next/
├── components/     # React components
├── pages/          # Next.js pages
├── public/         # Static files
├── redux/          # Redux store and slices
├── styles/         # Global styles
└── types/          # TypeScript types
```

## 📚 Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [Redux Persist](https://github.com/rt2zz/redux-persist) - State persistence
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [lint-staged](https://github.com/okonet/lint-staged) - Run linters on staged files

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Authors

- Arun Kundu