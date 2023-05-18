/* Requires the Docker Pipeline plugin */
def params = []

pipeline {
    agent any
        
    stages {
        stage('Run Tests') {
            steps {
                catchError {
                    sh '''
                        #rm -rf app-automate # name of your github repository
                        #nvm use 16.20.0
                        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
                        export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                        #echo "node and npm installed"

                        #nvm install 16.20.0
                        nvm use 16.20.0
                        node -v
                        #npm -v
                        
                        #echo "app-automate dir removed"
                        #git clone https://github.com/harshbrowserstack/app-automate # clone your github repository
                        #echo "app-automate repo cloned"
                        #cd app-automate # cd to your repo
                        #echo "app-automate cd"
                        #npm install
                        # npm init wdio .
                        #echo "npm install completed"
                        npm run remote-parallel
                       
                    '''
                }
            }
        }
        
    }
}
