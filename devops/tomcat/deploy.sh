cd ../../
# alias mvn17="JAVA_HOME=/Users/tkirmizis001/.sdkman/candidates/java/17.0.7-zulu && mvn"
# mvn17 clean install -DskipTests -Dactive.profile=external_tomcat
mvn clean install -DskipTests -Dactive.profile=external_tomcat
sudo rm -rf devops/tomcat/webapps/ROOT
sudo rm -rf devops/tomcat/webapps/ROOT.war
cp target/pwc-jacademy-demo-*.war devops/tomcat/webapps/ROOT.war