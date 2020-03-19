FROM node:13.10.1-alpine
COPY . /src/geojson-merge
RUN npm install -g /src/geojson-merge
WORKDIR /work
ENTRYPOINT ["/usr/local/bin/geojson-merge"]
