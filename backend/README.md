<p align="center">
<img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1-1174935.png" height="80px"/>
&nbsp;

<img src="https://img.icons8.com/color/452/mongodb.png" height="80px"/>
&nbsp;

<img src="https://images.tute.io/tute/topic/express-js.png" height="80px"/> 
&nbsp; 

<img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" height="80px"/>
&nbsp;

<img src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" height="80px"/> 
&nbsp; 

<img src="https://stack.desenvolvedor.expert/appendix/docker/images/compose.png" height="80px"/> 
&nbsp; 
</p>

<h4>:man_technologist: Docker server with nodejs, mongodb, express, nodemon, docker and docker-compose.</h4>

<hr>

## :rocket: How to use?

:heavy_check_mark: Clone project and access its folder.

```bash
$ git clone https://github.com/jtiagosantos/docker-server-with-mongodb.git
$ cd docker-server-with-mongodb
```

:heavy_check_mark: To install dependencies:

```bash
$ npm install
```

:heavy_check_mark: Download mongodb image:

```bash
$ docker pull mongo
```

:heavy_check_mark: To start it:

```bash
$ docker-compose up --build
```

:fire: Server running on port 3000!


## :gear: Mongodb via bash

:heavy_check_mark: Enter mongodb bash:

```bash
$ docker exec -it MONGODB bash
$ mongo
```

:heavy_check_mark: Show databases:

```bash
$ show dbs
```

:heavy_check_mark: Enter an existing database or create a new database:

```bash
$ use database
```

:heavy_check_mark: Show collections:

```bash
$ show collections
```

:heavy_check_mark: Delete a database:

```bash
$ use database
$ db.getCollectionNames().forEach(c=>db[c].drop())
```

:heavy_check_mark: Delete a collection:

```bash
$ use database
$ db.collection_name.drop()
```