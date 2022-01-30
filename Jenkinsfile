pipeline {
agent any
// {
//        docker {
//            image 'node:6-alpine'
//        }
//    }
    stages {
        stage('Build') {
            steps {
                bat 'docker-compose up'
                // echo 'Hello'
            }
        }
    }
}
