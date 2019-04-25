FROM alpine:3.9

RUN apk add python ansible
RUN apk add --update openssh sshpass python ansible \
&& rm  -rf /tmp/* /var/cache/apk/*
