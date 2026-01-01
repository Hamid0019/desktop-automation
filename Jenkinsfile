pipeline {
    agent none

    stages {

        stage('Windows Desktop Tests') {
            agent { label 'windows-desktop' }

            environment {
                DESKTOP_PLATFORM = 'windows'
            }

            steps {
                checkout scm

                bat '''
                echo ===== Windows Desktop Automation =====
                node -v
                npm -v

                npm install
                npx wdio run wdio.conf.ts --spec src/tests/test_text_edit.e2e.ts
                '''
            }

            post {
                always {
                    echo "Windows test run completed"
                }
            }
        }

        stage('Mac Desktop Tests') {
            agent { label 'mac-desktop' }

            environment {
                DESKTOP_PLATFORM = 'mac'
            }

            steps {
                checkout scm

                sh '''
                echo "===== Mac Desktop Automation ====="
                node -v
                npm -v

                npm install
                npx wdio run wdio.conf.ts --spec src/tests/test_text_edit.e2e.ts
                '''
            }

            post {
                always {
                    echo "Mac test run completed"
                }
            }
        }
    }

    post {
        always {
            echo "Desktop automation pipeline finished"
        }
    }
}
