FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT=8001

EXPOSE 8001

CMD ["node", "index.js"]