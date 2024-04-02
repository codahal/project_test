pipeline {
    agent any

    stages {
        stage('Check Queue') {
            steps {
                script {
                    def queueSize = currentBuild.rawBuild.executor.currentExecutable.executor.queue.items.size()
                    if (queueSize > 1) {
                        echo "A build is queued, aborting the current build"
                        currentBuild.result = 'ABORTED'
                        error "Build aborted due to a queued build"
                    } else {
                        echo "No builds queued, proceeding with the current build"
                    }
                }
            }
        }
        stage('Build') {
            steps {
                // Your build steps here
                echo "Building..."
                // For example, npm start
                sh 'npm start'
            }
        }
    }
}
