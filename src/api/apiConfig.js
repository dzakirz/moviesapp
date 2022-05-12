import dotenv from "dotenv"
dotenv.config()

const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "2588072e53fb37c608b4b2a6cc38fe9f",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig
