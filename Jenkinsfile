pipeline {
    agent {
        docker {
            image 'node:10'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('test') {
            steps {
                sh 'npm test'
            }
        }
        stage('deploy') {
        steps {
         withCredentials([sshUserPrivateKey(credentialsId: 'sshuser', keyFileVariable: 'key', passphraseVariable: '', usernameVariable: 'user'), string(credentialsId: 'port', variable: 'serverPort'), string(credentialsId: 'serverip', variable: 'serverIP')]) {
              sh 'chmod 555 ./scripts/deploy.sh'
              sh 'cat $key > tempfile'
              sh 'chmod 300 ./tempfile'
              sh 'cat ./scripts/deploy.sh | ssh -o "StrictHostKeyChecking=no" -i ./tempfile $user@$serverIP -p $serverPort "bash -"'
            }
          }
        }
    }
}
