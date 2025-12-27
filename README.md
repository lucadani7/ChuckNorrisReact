# Chuck Norris Facts Generator 👊

A modern, fast, and responsive web application that generates random Chuck Norris facts. Built with **React**, **TypeScript**, and **Vite** to ensure type safety and high performance.

---
> *"Chuck Norris doesn’t read the documentation. The documentation reads Chuck Norris."*
---

## 🚀 Features

- **Random Facts:** Fetches a unique joke from the [Chuck Norris IO API](https://api.chucknorris.io/) with a single click.
- **Type Safety:** Fully typed response handling using TypeScript interfaces.
- **Clipboard Integration:** "Copy to Clipboard" functionality with visual feedback (Toast/Button state change).
- **Error Handling:** Graceful handling of network errors and loading states.
- **Modern UI:** Responsive design with CSS Variables, transitions, and a dark-themed aesthetic.
- **Optimized Assets:** Local asset management for faster loading times.

## 🛠️ Tech Stack

- **Core:** React 18 (Hooks: `useState`, `useEffect`)
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** CSS3 (Custom Properties & Flexbox)
- **API:** chucknorris.io
- **Deployment:** Vercel

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lucadani7/ChuckNorrisReact.git
   cd ChuckNorrisReact
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your favorite browser at `http://localhost:5173`.

## 💡 Code Highlights
1. Type-Safe API Call: The application uses a TypeScript interface to define the expected structure of the API response, preventing runtime errors.
   ```ts
   interface ChuckNorrisJoke {
    icon_url: string;
    id: string;
    url: string;
    value: string;
   }
   ```
2. Clipboard Interaction: Uses the modern Navigator API to interact with the system clipboard asynchronously.
   ```tsx
   const copyToClipboard = async () => {
    await navigator.clipboard.writeText(joke);
    setCopied(true);
   };
   ```

## 📄 License
This project is licensed under the Apache-2.0 License.
