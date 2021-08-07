// example how to connect to grpc server using go client
package main

import (
	"context"
	"io"
	"log"
	"time"

	"github.com/wildanpurnomo/go-serialport-grpc/protos"
	"google.golang.org/grpc"
)

func main() {
	conn, err := grpc.Dial("localhost:9090", grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.Fatalf("Cannot connect to grpc server: %v", err)
	}
	defer conn.Close()

	c := protos.NewSerialClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	stream, err := c.GetSerialData(ctx, &protos.Request{})
	if err != nil {
		log.Fatalf("Failed to call GetSerialData: %v", err)
	}

	for {
		data, err := stream.Recv()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatalf("%v.Data(_) = _, %v", conn, err)
		}
		log.Printf("Data received: %v", data)
	}
}
