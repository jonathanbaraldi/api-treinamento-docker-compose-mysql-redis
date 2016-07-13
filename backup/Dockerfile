	# De onde deve ser pega a imagem e a versão. Nesse caso do repositório padrão do Docker, a imagem do 
FROM ubuntu

	# Autor/Mantenedor
MAINTAINER Jonathan Baraldi

	# >>>>>>>> SO
RUN apt-get update	
RUN apt-get install sudo
	# >>>>>>>> NODEJS

RUN sudo apt-get install -y nodejs npm git git-core

WORKDIR /src
ADD . /src
ADD package.json /tmp/package.json


# RUN cd /tmp && npm install
# RUN mkdir -p /src && cp -a /tmp/node_modules /src/

	# Instalar nodemon
# RUN sudo npm install -g nodemon

	# >>>>>>>> MARIADB

# RUN sudo apt-get install -y software-properties-common
# RUN sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db
# RUN sudo add-apt-repository 'deb [arch=amd64,i386,ppc64el] http://mirror.edatel.net.co/mariadb/repo/10.1/ubuntu trusty main'

# ADD mariadb.pref /etc/apt/preferences.d/mariadb.pref

# RUN sudo apt-get update -y
# RUN sudo apt-get install -y mariadb-client

ADD sql/books.sql /var/lib/mysql/books.sql


# RUN mysql -u root -h $MARIADB_PORT_3306_TCP_ADDR --password='123' < /var/lib/mysql/books.sql

	# Instalar o ZIP e A AZURE CLI para rodar o BKP
	# Subir o BKP do BANCO - arquivo BASH Anexado

	# >>>>>>>>> Azure CLI


	# >>>>>>>> DIRETORIO DE TRABALHO

	# Expor porta 80
EXPOSE  80
	# Rodar o app usando nodemon

RUN	ln -s /usr/bin/nodejs /usr/bin/node

CMD ["node", "/src/index.js"]

	# Popular database
