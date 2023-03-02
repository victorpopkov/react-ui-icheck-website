FROM node:18.15.0-alpine3.17 as build

ARG APP_HOST="0.0.0.0"
ENV APP_HOST="${APP_HOST}"

ARG APP_NAME=""
ENV APP_NAME="${APP_NAME}"

ARG APP_PORT=80
ENV APP_PORT="${APP_PORT}"

ARG APP_PUBLIC_PATH="/"
ENV APP_PUBLIC_PATH="${APP_PUBLIC_PATH}"

ARG APP_REVISION=""
ENV APP_REVISION="${APP_REVISION}"

ARG APP_VERSION=""
ENV APP_VERSION="${APP_VERSION}"

ARG LIB_REVISION=""
ENV LIB_REVISION="${LIB_REVISION}"

ENV NODE_ENV="production"
ENV BABEL_ENV="production"

WORKDIR /srv/react-ui-icheck-website/
COPY . .
RUN NODE_ENV="development" yarn install --ignore-scripts \
  && yarn cache clean \
  && yarn build

FROM nginx:1.23.3-alpine AS nginx

WORKDIR /usr/share/nginx/html/
COPY --from=build /srv/react-ui-icheck-website/dist/ /usr/share/nginx/html/
