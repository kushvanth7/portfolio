FROM alpine:latest

RUN apk add --no-cache git openssh

WORKDIR /repo

# Optional Git configuration
RUN git config --global user.name "kushvanth7" && \
    git config --global user.email "kushvanth2917@gmail.com"
