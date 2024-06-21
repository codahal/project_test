pipeline {
    agent any

    tools {
        nodejs "NodeJS" // Name configured in Jenkins Global Tool Configuration for Node.js
    }

    stages {
        stage('Checkout') {
            steps {
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
                sh 'npm run build' // Replace with your build command if different
            }
        }

        stage('Start with PM2') {
            steps {
                sh 'pm2 start project_test'
            }
        }

        stage('Copy Files') {
            steps {
                script {
                    sh 'mkdir -p /Users/ecorfyinc/project_test'
                    sh 'rsync -av --exclude=".git" /Users/ecorfyinc/.jenkins/workspace/git\ hook\ trigger/ /Users/ecorfyinc/project_test/'
                }
            }
        }

        stage('Declarative: Post Actions') {
            steps {
                echo 'Build or deployment finished.'
            }
        }
    }

    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
    }
}
