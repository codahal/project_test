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
                script {
                    // Start or restart the application using PM2 with ecosystem.config.js
                    sh '''
                    if pm2 describe project_test > /dev/null; then
                        pm2 restart echosystem.config.js --env production --only project_test
                    else
                        pm2 start echosystem.config.js --env production --only project_test
                    fi
                    '''
                }
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

        success {
            script {
                // Check if the application is running and listening on the expected port
                echo 'Checking if the application is running...'
                sh '''
                if curl -s http://localhost:YOUR_PORT > /dev/null; then
                    echo "Application is running successfully."
                else
                    echo "Application is not running. Please check the logs."
                fi
                '''
            }
        }
    }
}
