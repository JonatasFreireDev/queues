# Dockerfile para queue-worker (Go)
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY . .
RUN go build -o worker ./cmd/main.go

FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/worker .
CMD ["./worker"] 