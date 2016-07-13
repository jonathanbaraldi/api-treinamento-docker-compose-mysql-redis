#!/bin/bash
mysql -u root --password='123' -h $MARIADB_1_PORT_3306_TCP_ADDR < sql/books.sql