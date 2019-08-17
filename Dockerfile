FROM node:alpine
WORKDIR /app
COPY web/  /app
LABEL NORE="just for test"
LABEL AUTHOR="1141591465@qq.com"
RUN npm i
CMD [ "npm", "run", "s" ]