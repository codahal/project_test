pipeline {
    agent any
    
    tools {
        nodejs 'Nodejs'
    }
    
    stages {
        stage('Build') {
            steps {
                // Build the project
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    // Ensure PM2 is installed globally
                    sh 'npm install pm2 -g'
                    
                    // Start or restart the application using PM2 with ecosystem.config.js
                    sh '''
                    if pm2 describe all > /dev/null; then
                        pm2 restart echosystem.config.js --env production
                    else
                        pm2 start echosystem.config.js --env production
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
    }
}
