pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Start Application with PM2') {
            steps {
                // Install PM2 globally (if not already installed)
                sh 'npm install pm2 -g'
                // Start application using PM2
                sh 'pm2 start echosystem.config.js --env production'
            }
        }
    }

    post {
        always {
            // List PM2 processes for debugging purposes
            sh 'pm2 list'
        }

        failure {
            // Print PM2 logs on failure
            sh 'pm2 logs'
        }
    }

    // Configure webhook to trigger this pipeline automatically
    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        disableConcurrentBuilds()
    }

    triggers {
        // GitHub webhook trigger
        githubPush()
    }
}
