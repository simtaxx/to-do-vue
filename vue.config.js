module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/general/mediaQuery.scss";
        `,
      },
    },
  },
}
