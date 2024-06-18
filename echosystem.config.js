module.exports = {
  apps: [
    {
      name: 'project_test',
      script: 'app.js', // Replace with the entry point of your application
      instances: 'max', // Or a number of instances you want to run
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
