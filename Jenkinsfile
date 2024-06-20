pipeline {
    agent any
    
    tools {
        nodejs 'Nodejs'
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                // Build the project
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                // Assuming PM2 is already installed on the deployment server/environment
                
                // Restart or start the application using PM2 with ecosystem.config.js
                sh 'pm2 restart echosystem.config.js --env production || pm2 start echosystem.config.js --env production'
            }
        }
    }
    
    post {
        always {
            // List PM2 processes for debugging purposes
            sh 'pm2 list'
        }
        
        failure {
            // Print PM2 logs on failure
            sh 'pm2 logs'
        }
    }
}
