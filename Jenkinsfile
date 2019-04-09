pipeline {
    agent { 
        docker {
            image 'node:10'
            args '-p 80:3000'
        } 
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm build'
            }
        }
        stage('test') {
            steps {
                sh 'npm test'
            }
        }
        stage('deploy') {
            steps {
                sh 'npm start'
            }
        }
    }
}
