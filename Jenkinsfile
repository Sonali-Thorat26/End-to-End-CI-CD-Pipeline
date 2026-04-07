pipeline {
    agent any
    
    stages {
        stage('git clone') {
            steps {
                echo 'clonning the repo'
                git url:"https://github.com/sandhya-pandhare/jenkins_ubuntu.git",branch:"main"
            }
        }
        stage('Docker build') {
            steps {
                echo 'building the docker image'
                sh 'docker build -t myfirstnode1:latest .'
                echo 'image builded successfully'
            }
        }
        stage('Docker run') {
            steps {
                echo 'running the container'
                sh 'docker run -it -d -p 3000:3000 --name cicd1-img myfirstnode1:latest'
            }
        }
    }
}
