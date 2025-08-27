# Movie App 🎬

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The **Movie App** allows users to **search movies**, **view detailed information** (poster, director, genre, rating, etc.), and provides a **Download/Stream** link.  
It integrates with the [OMDb API](https://www.omdbapi.com/) to fetch movie details.

🔗 **Live Demo**: [Movie App on Vercel](https://movie-app-ten-beta-90.vercel.app/)

---

## Features ✨

- 🔍 Search movies by title  
- 🎥 View movie details: Poster, Title, Director, Genre, Year, Language, Rating, Plot  
- ⬇️ Download/Stream link  
- 📱 Responsive UI built with **Tailwind CSS**  
- ⚡ Powered by **React.js** and **Axios** for API requests  

---

## Tech Stack 🛠️

- **React.js** – Frontend framework  
- **Tailwind CSS** – Styling  
- **Axios** – For API requests  
- **OMDb API** – Movie data source  
- **Vercel** – Deployment  

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  

The page will reload when you make changes.  
You may also see any lint errors in the console.

---

### `npm test`

Launches the test runner in the interactive watch mode.  

---

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  

---

### `npm run eject`

⚠️ **Note: this is a one-way operation. Once you eject, you can’t go back!**  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.  

---

## Project Structure 📂
movie-app/
│── public/
│── src/
│ ├── App.js
│ ├── Content.js
│ ├── Header.js
│ ├── API.js
│ ├── output.css
│ └── index.js
│── package.json
│── README.md

## How to Use 🚀

1. Clone the repo  
   ```bash
   git clone https://github.com/your-username/movie-app.git
   cd movie-app
   
2. Install dependencies
    npm install

3.Add your OMDb API key in API.js:
   export const apikey = "your_api_key_here";

4. Run the project
   npm start
 

