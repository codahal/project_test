pipeline {
    agent any

    tools {
        nodejs 'Nodejs'
    }

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the repository to fetch the latest changes
                git 'https://github.com/codahal/project_f.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the project
                sh 'npm run build'
            }
        }

        stage('Stop PM2 Process') {
            steps {
                script {
                    // Stop the specific PM2 process for project_test if it is running
                    sh '''
                    if pm2 describe project_test > /dev/null; then
                        pm2 stop project_test
                    else
                        echo "PM2 process project_test is not running"
                    fi
                    '''
                }
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

    triggers {
        // GitHub webhook trigger
        githubPush()
    }
}

         
