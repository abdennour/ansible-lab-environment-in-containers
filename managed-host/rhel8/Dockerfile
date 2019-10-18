FROM alpine:edge as downloads
WORKDIR /data
RUN wget https://www.python.org/ftp/python/3.6.2/Python-3.6.2.tar.xz \
  && tar -xvf Python-3.6.2.tar.xz


FROM registry.access.redhat.com/ubi8/ubi-init

COPY --from=downloads /data/Python-3.6.2/. /usr/src
WORKDIR /usr/src/Python-3.6.2

RUN yum install -y gcc openssl-devel && \
  ./configure --prefix=/opt/python3 && \
  make altinstall && \
  ln -s /opt/python3/bin/python3.6 /usr/bin/python && \
  chmod +x /usr/bin/python && \
  yum remove -y gcc openssl-devel && \
  yum clean all
WORKDIR /