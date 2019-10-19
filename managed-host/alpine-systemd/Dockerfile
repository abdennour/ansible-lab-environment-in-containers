FROM alpine:edge
RUN apk --update --no-cache add openrc && \
  ln -sf /sbin/openrc-init /sbin/init

ENTRYPOINT ["/sbin/init"]