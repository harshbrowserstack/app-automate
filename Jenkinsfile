/* Requires the Docker Pipeline plugin */
def params = []

pipeline {
    agent any
        
    stages {
        
        stage('RUN TEST') {
         steps {
            browserstack(credentialsId: '532f7096-5624-493c-912c-0064a3cc8f47') {
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
