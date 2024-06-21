pipeline {
    agent any
    tools {
        nodejs 'Nodejs'
    }
    environment {
        GITHUB_REPO = 'https://github.com/codahal/project_test.git'
        LOCAL_DIR = '/Users/ecorfyinc/project_test'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git url: "${env.GITHUB_REPO}", branch: 'main'
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
        stage('Copy Files') {
            steps {
                script {
                    def sourceDir = "${env.WORKSPACE}"
                    def destinationDir = "${env.LOCAL_DIR}"
                    sh "cp -r ${sourceDir}/* ${destinationDir}/"
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

    
