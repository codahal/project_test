pipeline {
    agent any

    triggers {
        pollSCM('H/5 * * * *') // Poll the GitHub repository every 5 minutes
    }

    environment {
        GIT_REPO = 'https://github.com/codahal/project_test.git'
        LOCAL_FILE_PATH = '/Users/ecorfyinc/project_test'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: "${env.GIT_REPO}"
            }
        }

        stage('Update Local File') {
            steps {
                script {
                    def repoFileContent = readFile 'path/in/repo/file.txt'
                    writeFile file: "${env.LOCAL_FILE_PATH}", text: repoFileContent
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}


       
