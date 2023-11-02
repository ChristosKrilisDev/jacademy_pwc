docker-compose -f postgres.yml stop
docker-compose -f postgres.yml kill
docker-compose -f postgres.yml rm -f
docker volume rm postgres_pwc-jacademy-postgresql11-data
docker-compose -f postgres.yml up -d
docker-compose -f postgres.yml logs -f
