pipeline {
    agent any
    
    tools {
        nodejs 'Nodejs'
    }
    
    environment {
        // Define the local directory where you want to pull the code
        LOCAL_CODE_DIR = "/Users/ecorfyinc/project_f"
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Clean the local directory if it already exists
                deleteDir()

                // Pull the code from your public repository to the local directory
                git url: 'https://github.com/codahal/project_test.git'
            }
        }

        stage('Build') {
            steps {
                // Change directory to your local code directory
                dir(LOCAL_CODE_DIR) {
                    // Build the project
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    // Start or restart the application using PM2 with ecosystem.config.js
                    dir(LOCAL_CODE_DIR) {
                        sh '''
                        if pm2 describe all > /dev/null; then
                            pm2 restart project_test
                        else
                            pm2 restart project_test
                        fi
                        '''
                    }
                }
            }
        }
    }
    
    post {
        always {
            // List PM2 processes for debugging purposes
            dir(LOCAL_CODE_DIR) {
                sh 'pm2 list'
            }
        }
        
        failure {
            // Print PM2 logs on failure
            dir(LOCAL_CODE_DIR) {
                sh 'pm2 logs'
            }
        }
    }
}
