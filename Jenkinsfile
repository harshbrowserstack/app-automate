/* Requires the Docker Pipeline plugin */
def params = []

pipeline {
    agent any
        
    stages {
        
        stage('RUN TEST') {
         steps {
            browserstack(credentialsId: '2f82e5e8-7818-433d-bfc4-250ea1e6adb1') {
                sh '''
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
                    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    #echo "node and npm installed"

                    #nvm install 16.20.0
                    nvm use 16.20.0
                    node -v
                    npm run remote
                '''
            }
         }
      }
    }
}
