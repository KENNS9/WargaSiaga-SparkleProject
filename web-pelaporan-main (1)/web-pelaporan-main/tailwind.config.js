/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",      
    },
    extend: {
      colors: {
        // Neutral colors        
        primaryBg: "#E8F5E9",
        primaryMain: "#66BB69",
        silver: "#F5F7FA",
        neutral: "#263238",        

        netral: {
          black: "#263238",
          "d-grey": "#4D4D4D",
          grey: "#717171",
          "l-grey": "#89939E",
          "grey-blue": "#89939E",
          silver: "#F5F7FA",
          white: "#FFFFFF",
        },
        // Primary and secondary
        primary: {
          hijau: "#4CAF4F",
          shade: {
            1: "#44CC8A",
            2: "#388E3B",
            3: "#237D31",
            4: "#1B5E1F",
            5: "#103E13",
          },
          tint: {
            1: "#66BB69",
            2: "#81C784",
            3: "#A5D6A7",
            4: "#C8E6C9",
            5: "#E8F5E9",
          },
        },
        secondary: {
          "dark-blue": "#263238",
        },
        // Action colors
        action: {
          warning: "#FBC02D",
          error: "#E53835",
          success: "#2E7D31",
        },
        // Flowkit colors
        flowkit: {
          purple: "#7B61FF",
          charcoal: "#222222",
          red: "#FC5555",
          green: "#29CC6A",
          blue: "#0099FF",
          white: "#FFFFFF",
        },
      },
      fontSize: {
        // Header styles
        "header-extra-bold-60": "60px",
        "header-extra-bold-48": "48px",
        "header-extra-bold-40": "40px",
        "header-semi-bold-35": "35px",
        "header-bold-25": "25px",
        // Body text
        "body-regular-20": "20px",
        "body-regular-16": "16px",
        "body-regular-32": "32px",
        "body-regular-12": "12px",
        "body-regular-13": "13px",
        "body-regular-15": "15px",
        "body-regular-18": "18px",
        // Medium body text
        "body-medium-20": "20px",
        "body-medium-13": "13px",
        "body-medium-30": "30px",
        "body-medium-24": "24px",
        // Logotype
        "logotype-48": "48px",
      },
      boxShadow: {
        main: "4px 8px 40px 0px #CEE9CF",
      },
    },
  },
  plugins: [],
}