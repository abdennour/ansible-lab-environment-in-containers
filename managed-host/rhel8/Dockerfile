FROM registry.access.redhat.com/ubi8/ubi-init

RUN yum module install python36 -y && \
  ln -s /usr/bin/python3 /usr/bin/python && \
  yum clean all
