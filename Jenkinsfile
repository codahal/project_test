pipeline {
    agent any
    tools {
        nodejs 'Nodejs'
    }

    environment {
        LOCAL_PATH = "/Users/ecorfyinc/project_test" // Update this path to your local directory
    }
    
    stages {
        stage('Update Local Repository') {
            steps {
                dir("${env.LOCAL_PATH}") {
                    script {
                        // Use the SSH credentials for pulling the latest changes
                        sshagent(credentials: ['github-ssh-key']) {  // Ensure this matches the ID set in Jenkins
                            sh 'git pull origin main'  // Replace 'main' with your branch name if different
                        }
                    }
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                dir("${env.LOCAL_PATH}") {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                dir("${env.LOCAL_PATH}") {
                    sh 'npm run build'
                }
            }
        }
        stage('Start with PM2') {
            steps {
                dir("${env.LOCAL_PATH}") {
                    script {
                        // Start the application using PM2
                        sh 'pm2 start project_test'
                    }
                }
            }
        }
    }
    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed.'
        }
    }
}

        
   
