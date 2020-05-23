#!/usr/bin/node
const { execSync } = require('child_process');
const sh = cmd => execSync(cmd, { encoding: 'utf8' });
const option = process.argv[2];
const hostName = process.argv[3];
const printer = (data) => console.log(JSON.stringify(data));

const groups = {
  apps: [],
  dbs: [],
  sshd: []
}

// { host1: {var1: key1}, host2: ...}
let hostsCmdOutput = sh(
  `docker container ls --format '{"names": "{{.Names}}", "id": "{{.ID}}", "ports": "{{.Ports}}"}'`
 ).trim()
  .split('\n')
  .join(',')
  
let hostsArray = JSON.parse(`[${hostsCmdOutput}]`);

let hostsMap = hostsArray.reduce(
  (reduced, current) => ({
    ...reduced,
    [current.names]: {ansible_host: current.id, c_ports: current.ports, ansible_connection: 'docker'}
  }) , {}
)

console.log(hostsMap)


if (option === '--list') {
  printer(groups);
  return;
}

if (option === '--host') {
  printer(hosts[hostName] || {});
  return;
}

// # if [ "${1}" = "--help" ]; then
// # cat << EOF
// # usage: ${0} --list
// #        ${0} --host myhost 
// # Report bugs to: 
// # up home page:
// # EOF

// # fi


// # docker container ls --format '{ "ansible_host": "{{.Names}}", "container_id": "{{.ID}}"}' | while read host; do
// #   id=$(echo $x | jq -r '.container_id');
// #   name=$(echo $x | jq -r '.ansible_host');

// # done

