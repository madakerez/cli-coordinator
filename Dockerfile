FROM us-central1-docker.pkg.dev/project-c09883fa-34b7-476f-80e/ci-images/cli-coordinator-base:latest AS builder

RUN npx nx run-many --target=build --all --parallel=4

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
