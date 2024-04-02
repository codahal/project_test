pipeline {
    agent any
    tools {
        nodejs 'Nodejs'
    }
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm start' // Run npm run build

            }
        }
        
    }
}
