module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: { primary: "#00D2EB", secondary: "#222C21" },
      minHeight: {
        "200px": "200px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
