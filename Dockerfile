FROM node:lts
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/
EXPOSE 3000
CMD ["node", "backend/server/server.js"]