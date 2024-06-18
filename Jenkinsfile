pipeline {
    agent any
    environment {
        NODE_ENV = 'production'  // Set the environment variable if needed
    }
    stages {
        stage('Clone Repository') {
            steps {
                // Clone the repository
                git 'https://github.com/codahal/project_f.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }
        stage('Start Application with PM2') {
            steps {
                // Start the application using PM2
                sh 'pm2 start echosystem.config.js --env production'
            }
        }
    }
    post {
        always {
            // Ensure PM2 list is available for debugging
            sh 'pm2 list'
        }
        failure {
            // Print PM2 logs on failure
            sh 'pm2 logs'
        }
    }
}
