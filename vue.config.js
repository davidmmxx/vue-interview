const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // nastav devServer na portu 3000 miesto 8080
  devServer: {
    port: 3000
  }
})
