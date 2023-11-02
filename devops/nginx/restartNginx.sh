docker-compose -f nginx-proxy.yml stop
docker-compose -f nginx-proxy.yml kill
docker-compose -f nginx-proxy.yml rm -f
docker-compose -f nginx-proxy.yml up -d
docker-compose -f nginx-proxy.yml logs -f
