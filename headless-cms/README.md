## Install and run Contember locally

### Install dependencies
```bash
# For Linux or WSL
npm install

# For Mac or Windows
docker-compose run admin npm install
```

### Get public api key
```bash
npm run contember tenant:create-api-key
```

This public api key has to be used in the `.env` file as `NEXT_PUBLIC_TOKEN`.

### Start Docker containers
```bash
docker-compose up
```
Now, administration UI should be running on address http://localhost:1480.
