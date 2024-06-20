pipeline {
    agent any

    environment {
        // Define your environment variables here
        NODE_ENV = 'production'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Run build script
                    sh 'npm run build'
                }
            }
        }

        stage('Start Application') {
            steps {
                script {
                    // Start the application with PM2
                    sh 'pm2 start echosystem.config.js --env production'
                }
            }
        }
    }

    post {
        always {
            script {
                // Display PM2 logs for debugging purposes
                sh 'pm2 logs'
            }
        }
        failure {
            script {
                // Stop all PM2 processes on failure
                sh 'pm2 stop all'
            }
        }
        success {
            script {
                // Save the PM2 process list
                sh 'pm2 save'
            }
        }
    }
}

         
