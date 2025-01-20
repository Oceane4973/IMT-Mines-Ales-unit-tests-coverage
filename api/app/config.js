module.exports = {
  development: {
    type: 'development',
    port: 3000,
    mongodb: 'mongodb+srv://oceane:oceane@cluster0.q3dxw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  },
  production: {
    type: 'production',
    port: 3000,
    mongodb: 'mongodb+srv://oceane:oceane@cluster0.q3dxw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  },
  test: {
    type: 'test',
    port: 3000,
    mongodb: 'mongodb+srv://oceane:oceane@cluster0.q3dxw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  }
}