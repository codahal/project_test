pipeline {
    agent any

    environment {
        PROJECT_DIR = "/Users/ecorfyinc/project_test"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Start with PM2') {
            steps {
                script {
                    sh 'pm2 start project_test'
                }
            }
        }

        stage('Copy Files') {
            steps {
                script {
                    sh "mkdir -p ${PROJECT_DIR}"
                    sh "rsync -av --exclude='.git' ${WORKSPACE}/ ${PROJECT_DIR}/"
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
    }
}
