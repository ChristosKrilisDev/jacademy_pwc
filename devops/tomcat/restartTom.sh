docker-compose -f tomcat.yml stop
docker-compose -f tomcat.yml kill
docker-compose -f tomcat.yml rm -f
docker-compose -f tomcat.yml up -d
docker-compose -f tomcat.yml logs -f
