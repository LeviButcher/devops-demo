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
          withCredentials([sshUserPrivateKey(usernameVariable: 'userssh'), string(variable: 'server'), string(variable: 'port')]) {
              sh 'chmod 555 ./scripts/deploy.sh'
              sh 'ssh $userssh@$server -p $port ./scripts/deploy.sh'
            }
          }
        }
    }
}
