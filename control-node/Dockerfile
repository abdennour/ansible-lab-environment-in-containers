FROM alpine:3.9

# docker is required to support ansible_connection=docker
RUN apk add --update openssh sshpass python ansible docker \
  && rm  -rf /tmp/* /var/cache/apk/*
