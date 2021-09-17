FROM nginx:1.21.3-alpine AS nginx

COPY ./dist/ /usr/share/nginx/html/
