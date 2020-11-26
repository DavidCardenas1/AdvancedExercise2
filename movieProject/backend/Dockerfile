
FROM oraclelinux:7-slim
 
# Create app directory
WORKDIR /usr/src/app
 
# Copy the .js files from your host machine into the new app directory
ADD *.js ./
 
# Update Oracle Linux
# Install Node.js
# Install the Oracle Instant Client
# Check that Node.js and NPM installed correctly
# Install the OracleDB driver
RUN yum update -y && \
  yum install -y oracle-release-el7 && \
  yum install -y oracle-nodejs-release-el7 && \
  yum install -y ol7_developer_EPEL nodejs && \
  yum install -y oracle-instantclient19.3-basic.x86_64 && \
  yum clean all && \
  node --version && \
  npm --version && \
  npm install oracledb && \
  echo Installed
 
CMD ["node", "server.js"]