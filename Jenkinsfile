pipeline {
    agent any
    
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
                sh 'npm run build'
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
                    def sourceDir = "${env.WORKSPACE}" // Jenkins workspace
                    def destinationDir = "/Users/ecorfyinc/project_test" // Destination directory
                    
                    // Ensure destination directory exists
                    sh "mkdir -p ${destinationDir}"
                    
                    // Use rsync with proper quoting to handle spaces in path
                    sh """
                       rsync -av --exclude=".git" "${sourceDir}/" "${destinationDir}/"
                    """
                }
            }
        }
    }
    
    post {
        always {
            echo 'Build or deployment finished.'
        }
    }
}

       
      
