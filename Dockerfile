FROM node:10-alpine
WORKDIR ./bin
COPY . . 
RUN npm run start

# ENTRYPOINT ["docker-entrypoint.sh"]


CMD [ "node","./bin/www.js" ]
