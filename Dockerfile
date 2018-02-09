FROM hosttoday/ht-docker-node:stable
WORKDIR /backupgate/
COPY ./ /backupgate/
RUN yarn install
ENTRYPOINT ["node", "dist/index.js"]