// Preloads images and loads them in browser cache
// so that the images are rendered instantly
export const preloadImages = (images) => {
  images.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}
