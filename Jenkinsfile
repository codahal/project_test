pipeline {
    agent any
    
    tools {
        nodejs 'Nodejs'
    }
    
    environment {
        PROJECT_DIR = "/Users/ecorfyinc/project_f " // Update with your actual project directory path
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Clean the existing project directory
                deleteDir()

                // Pull the code from your repository to the existing project directory
                dir(PROJECT_DIR) {
                    git url: 'https://github.com/codahal/project_test.git'
                }
            }
        }

        stage('Build') {
            steps {
                // Change directory to your project directory
                dir(PROJECT_DIR) {
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
                    dir(PROJECT_DIR) {
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
            dir(PROJECT_DIR) {
                sh 'pm2 list'
            }
        }
        
        failure {
            // Print PM2 logs on failure
            dir(PROJECT_DIR) {
                sh 'pm2 logs'
            }
        }
    }
}
