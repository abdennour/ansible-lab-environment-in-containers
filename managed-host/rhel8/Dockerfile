FROM registry.access.redhat.com/ubi8/ubi-init

RUN yum install -y python36 && \
  echo -e '#!/bin/bash\nbash /var/lib/alternatives/python3 "$@"' > /usr/bin/python \
  && chmod +x /usr/bin/python \
  && yum clean all
