A fully dockerized environment to play with ansible.

# Prerequisites:

- Docker
- Docker Compose
- [ kubectl ]

# Configuration

- Generate SSH key pair in `./secrets` directory:

```sh
ssh-keygen -t rsa -N "" -f secrets/id_rsa
```


# Using compose

**Setup**

```sh
docker-compose up -d
```

**Play**

```sh
## 
docker-compose exec controlnode ash
########
/playbook $ ansible all --list-hosts 
/playbook $ ansible m1 -m ping -u root
```

**Cleanup**

```sh
docker-compose down
```

# Using Kubernetes + compose

**Setup**

```sh
export stackname=infra-ansible
export DOCKER_STACK_ORCHESTRATOR=kubernetes
docker stack deploy -c docker-compose.yml ${stackname}
```

**Play**


```sh
# Get podID of control node
controlnode_podid=$(kubectl get pods -lcom.docker.service.id=${stackname}-controlnode -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it ${controlnode_podid} ash

########
/playbook $ ansible all --list-hosts 
/playbook $ ansible m1 -m ping -u root

```

**Cleanup**

```sh
docker stack rm ${stackname}
```