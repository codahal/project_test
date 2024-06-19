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
                script {
                    // Clone the repository to fetch the latest changes
                    echo 'Cloning repository...'
                    git 'https://github.com/codahal/project_f.git'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies
                    echo 'Installing dependencies...'
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the project
                    echo 'Building the project...'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Start or restart the specific PM2 process for project_test
                    echo 'Deploying the application...'
                    sh '''
                    if pm2 describe project_test > /dev/null; then
                        pm2 restart project_test --env production
                    else
                        pm2 start ecosystem.config.js --env production --only project_test
                    fi
                    '''
                }
            }
        }
    }

    post {
        always {
            script {
                // List PM2 processes for debugging purposes
                echo 'Listing PM2 processes...'
                sh 'pm2 list'
            }
        }

        failure {
            script {
                // Print PM2 logs on failure
                echo 'Build failed. Printing PM2 logs...'
                sh 'pm2 logs'
            }
        }
    }

    triggers {
        // GitHub webhook trigger
        githubPush()
    }
}

       
     
           
