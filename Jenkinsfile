pipeline {
  agent any
  tools { nodejs 'NodeJS22' }
  stages {
    stage('Dependencias') { steps { sh 'npm ci' } }
    stage('Pruebas y cobertura') { steps { sh 'npm run coverage' } }
    stage('Compilacion') { steps { sh 'npm run build' } }
  }
  post { success { archiveArtifacts artifacts: 'dist/**,coverage/lcov.info', fingerprint: true } }
}
