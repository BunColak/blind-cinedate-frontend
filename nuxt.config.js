export default {
  head: {
    title: "Blind CineDate",
    description: "Want to watch a movie but cannot decide on something?"
  },
  css: ['~/assets/styles/main.css'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  }
}