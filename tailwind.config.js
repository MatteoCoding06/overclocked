/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Aggiungi il percorso ai tuoi file
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a531dc",
        "primary-light": "#de82f4",
        "primary-dark": "#61189e",

        secondary: "#0056b3",
        "secondary-light": "#2e73d1",
        "secondary-dark": "#003f8a",

        success: "#28a745",
        error: "#dc3545",
        warning: "#ffc107",
        info: "#17a2b8",

        hover: "#ff9d60",
        focus: "#ffb27d",
        disabled: "#cccccc",

        text: {
          primary: "#ffffff",
          secondary: "#666666",
          light: "#ffffff",
          dark: "#000000",
        },

        background: {
          primary: "#060918",
          secondary: "#323e74",
          dark: "#1e1e1e",
          light: "#f0f0f0",
        },

        border: {
          default: "#e0e0e0",
          dark: "#cccccc",
        },

        shadow: {
          default: "rgba(0, 0, 0, 0.1)",
          dark: "rgba(0, 0, 0, 0.25)",
        },

        gradient: {
          start: "#a531dc",
          end: "#de82f4",
          background: "linear-gradient(90deg, #a531dc, #de82f4)",
        },
      },
    },
  },
  plugins: [],
};
