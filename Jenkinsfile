pipeline {
    agent any
    tools {
        nodejs 'Nodejs'
    }
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                 sh 'npm run build'
            }
        }
        stage('starting') {
            steps {
                sh 'npm start'
                //echo "start"
       
                

            }
        }
        
        
        }
    }
