const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false, // Desactiva el archivo de soporte
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
