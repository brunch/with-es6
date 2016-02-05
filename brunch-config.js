exports.config = {
  npm: {
    enabled: true
  },

  plugins: {
    babel: {
      presets: ['es2015']
    }
  },

  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  }
};
