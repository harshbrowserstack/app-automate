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
                        node -v
                        npm -v
                        echo "app-automate dir removed"
                        git clone https://github.com/harshbrowserstack/app-automate # clone your github repository
                        echo "app-automate repo cloned"
                        cd app-automate # cd to your repo
                        echo "app-automate cd"
                        #npm install
                        npm init wdio .
                        #echo "npm install completed"
                        npm run remote
                       
                    '''
                }
            }
        }
        
    }
}
