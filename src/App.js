pipeline {
    agent any
    tools {
        nodejs 'Nodejs'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the latest code from your repository
                checkout scm
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
        stage('Restart with PM2') {
            steps {
                script {
                    // Restart the application using PM2
                    sh 'pm2 restart project_test || pm2 start echosystem.config.js --env production'
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
