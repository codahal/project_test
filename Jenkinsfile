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

        stage('Copy Files') {
            steps {
                script {
                    sh "mkdir -p ${PROJECT_DIR}"
                    sh "rsync -av --exclude='.git' ${WORKSPACE}/ ${PROJECT_DIR}/"
                }
            }
        }

        stage('Restart PM2') {
            steps {
                script {
                    sh "pm2 restart ${PROJECT_DIR}/pm2 restart project_test"
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

      
