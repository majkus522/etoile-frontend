FROM node:25-alpine

COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
RUN rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

CMD ["npm", "run", "code"]