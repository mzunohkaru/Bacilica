psgl:
	docker-compose -f packages/database/docker-compose.yaml exec db psql -U myuser -d mydb