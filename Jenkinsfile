pipeline {
    agent any
    tools {
        nodejs 'Nodejs'
    }
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'// Run npm run build
                sh 'npm start'
            }
        }
        
    }
}
