pipeline {
    agent any
    
    // Specify Node.js tool installation
    tools {
        nodejs 'Nodejs'
    }
    
    stages {
        stage('Build') {
            steps {
                // Install dependencies and build
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Starting') {
            steps {
                // Start application (if needed)
                echo "Application start"
            }
        }
        
        stage('Deploy') {
            steps {
                // Restart all PM2 processes
                sh 'pm2 restart all'
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


     
