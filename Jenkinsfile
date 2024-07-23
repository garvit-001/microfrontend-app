pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the specified branch
                git branch: 'main', url: 'https://github.com/garvit-001/microfrontend-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                // Run your build script
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
    }
}
