FROM nginx:1.19.0-alpine AS nginx

COPY ./dist/ /usr/share/nginx/html/
