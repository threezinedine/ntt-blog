FROM golang:1.24.2-alpine

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY . .

RUN go build -o main main.go

CMD ["./main"]
