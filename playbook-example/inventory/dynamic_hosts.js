#!/usr/bin/node

const option = process.argv[2];
const hostName = process.argv[3];
const printer = (data) => console.log(JSON.stringify(data));

const groups = {
  webservers: ['web1', 'web2'],
  databases: ['db1', 'db2']
}

const hosts = {
  web1: {
    webserver : 'apache',
    welcomeMessage: 'Hello Here'
  },
  web2: {
    webserver : 'nginx',
    welcomeMessage: 'Hello There'
  }  
}

if (option === '--list') {
  printer(groups);
  return;
}

if (option === '--host') {
  printer(hosts[hostName] || {});
  return;
}
