module.exports = {
    apps: [
      {
        name: "project_test",
        script: "npm",
        args: "start",
        watch: true,
        ignore_watch: ["node_modules"],
        instances: 1,
        autorestart: true,
        max_memory_restart: "1G",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };