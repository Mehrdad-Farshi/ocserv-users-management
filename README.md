# ocserv-users-management

### Web panel to manage ocserv and openconnect users

#### Requirements(Ubuntu 20.04 or Docker host)

#### features:

1- create an account with a limit of gigabytes or monthly usage

2- users: add, edit, update, remove, block and disconnect

3- group: add, edit, update and remove

4- occtl command tools

5- statistics

6- Calculation of users' rx and tx

### Installation instructions

<center><img src="dialog.png"></center>

```
1- use install.sh script
    >>> chmod +x install.sh
    >>> ./install.sh

2- Installing panel without script
    >>> chmod +x ./configs/panel.sh
    >>> HOST=http://YOUR_DOMAIN_OR_IP ./configs/panel.sh

3- Docker host
  3-1: edit prod.env file

  3-2: run command
    >>> DOCKER_SCAN_SUGGEST=false docker-compose up -d --build --env-file "$(pwd)/prod.env"


4- frontend developing
    >>> docker compose -f docker-compose.dev.yml up --build
```

## migrate accounts from old panel to new panel:

```

--free-traffic: migrate users with free usage traffic
--old-path: Path to the old SQLite database

in os
1- rename db.sqlite3 to db-old.sqlite3
    >>> mv db.sqlite3 db-old.sqlite3

2- run script
    >>> /var/www/site/back-end/venv/bin/python3 manage.py migrate_to_new --old-path /OLD_PATH/db-old.sqlite3


in docker host:
1- rename db.sqlite3 to db-old.sqlite3
    >>> mv db.sqlite3 db-old.sqlite3

2- copy db-old.sqlite3 to volumes/db

3- run command in docker container
    >>> python3 /app/manage.py migrate_to_new --old-path /app/db/db-old.sqlite3
```
