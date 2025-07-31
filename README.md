# Random Avatar Generator

A simple and fun React application built with Vite that allows users to generate random avatars using the [DiceBear API](https://www.dicebear.com/). You can choose from various avatar styles, generate a new one with a click, and download it as an SVG file.

## ✨ Features

-   **Multiple Avatar Styles**: Choose from a variety of styles including Human, Pixel Art, Bots, Notionists, and more.
-   **Random Generation**: Instantly generate a unique avatar.
-   **Download SVG**: Download the generated avatar in high-quality SVG format.
-   **Simple UI**: Easy-to-use interface for a seamless experience.

## 🛠️ Tech Stack

-   **Frontend**: React.js
-   **Build Tool**: Vite
-   **API**: [DiceBear HTTP API](https://www.dicebear.com/how-to-use/http-api)
-   **Styling**: CSS

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
-   [Node.js](https://nodejs.org/)
-   [npm](https://www.npmjs.com/get-npm)

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/Arindam-Roy2004/Random-Avatar-Generator.git
    ```
2.  Navigate into the project directory:
    ```sh
    cd my-avatar-app
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the App

To run the app in development mode, use the `dev` script from [`package.json`](./package.json):

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The page will reload when you make changes.

## 📂 Project Structure

```
my-avatar-app/
├── src/
│   ├── components/
│   │   └── Avatar.jsx      # Core component for avatar generation and UI
│   ├── styles/
│   │   └── Avatar.css      # Styles for the Avatar component
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
├── package.json
└── vite.config.js
```
