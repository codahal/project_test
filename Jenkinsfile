pipeline {
    agent any

    stages {
        stage('Start') {
            steps {
                // Start the project
                echo "Starting the project..."
                // Replace the following line with your actual start command
                sh 'npm start'
            }
        }
        stage('Check Queue') {
            steps {
                script {
                    def queueSize = currentBuild.rawBuild.executor.currentExecutable.executor.queue.items.size()
                    if (queueSize > 1) {
                        echo "A build is queued, aborting the current build"
                        currentBuild.result = 'ABORTED'
                        error "Build aborted due to a queued build"
                    } else {
                        echo "No builds queued, continuing with the current build"
                    }
                }
            }
        }
    }
}

 
