FROM cypress/browsers:node14.19.0-chrome100-ff99-edge

# Create app directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

RUN npm install -g npm
RUN npm install -g yarn
RUN yarn install
# RUN npm install --legacy-peer-deps
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# COPY . .

CMD [ "npm", "run", "dev" ]
