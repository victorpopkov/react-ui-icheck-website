FROM nginx:1.19.4-alpine AS nginx

COPY ./dist/ /usr/share/nginx/html/
