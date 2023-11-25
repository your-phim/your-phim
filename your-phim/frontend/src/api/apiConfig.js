const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a95c63eee480195d5a2af1548931712f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;