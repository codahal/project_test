pipeline {
    agent any
    tools {
        nodejs 'Nodejs'
    }
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Starting') {
            steps {
                sh 'npm start'
            }
        }
        stage('Restart PM2') {
            steps {
                sh 'pm2 restart project_test'
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


