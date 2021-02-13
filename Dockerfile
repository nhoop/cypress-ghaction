FROM node:alpine

WORKDIR /appvue

COPY ./package.json /appvue

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install \
    && apk del .gyp

COPY . /appvue

CMD ["npm", "run", "serve"]
