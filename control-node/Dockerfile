ARG ANSIBLE_VERSION
FROM abdennour/ansible:${ANSIBLE_VERSION}

# add required package for ansible module
# RUN pip install pymongo
USER root
RUN apk add --no-cache jq nodejs nodejs-npm && pip install yq
USER ansible
