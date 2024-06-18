module.exports = {
  apps: [
    {
      name: 'project_test',
      script: 'app.js', // Adjust the script name/path as necessary
      env: {
        NODE_ENV: 'production'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
    // Other app definitions if any
  ]
};
