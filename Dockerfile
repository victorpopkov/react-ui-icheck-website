FROM nginx:1.21.6-alpine AS nginx

COPY ./dist/ /usr/share/nginx/html/
