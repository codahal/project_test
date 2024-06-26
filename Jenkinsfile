pipeline {
    agent any
    tools {
        nodejs 'Nodejs'
    }

    environment {
        LOCAL_PATH = "/Users/ecorfyinc/project_test" 
    }
    
    stages {
        stage('Update Local Repository') {
            steps {
                dir("${env.LOCAL_PATH}") {
                    script {
                        
                        sshagent(credentials: ['github-ssh-key']) {  
                            sh 'git pull origin main'  
                        }
                    }
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                dir("${env.LOCAL_PATH}") {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                dir("${env.LOCAL_PATH}") {
                    sh 'npm run build'
                }
            }
        }
        stage('Start with PM2') {
            steps {
                dir("${env.LOCAL_PATH}") {
                    script {
                        
                        sh 'pm2 start project_test'
                    }
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

        
   
