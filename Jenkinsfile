pipeline {
    agent any
    tools {
        nodejs 'Nodejs'
    }
    
    stages {
        stage('Update Local Repository') {
            steps {
                script {
                    // Use the SSH credentials for pulling the latest changes
                    sshagent(credentials: ['ssh_agent']) {
                        sh 'git pull origin main'  // Replace 'main' with your branch name if different
                    }
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Start with PM2') {
            steps {
                script {
                    // Start the application using PM2
                    sh 'pm2 start project_test'
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
