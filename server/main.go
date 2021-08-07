package main

import (
	"bufio"
	"fmt"
	"log"
	"net"

	"github.com/tarm/serial"
	"github.com/wildanpurnomo/go-serialport-grpc/protos"
	"google.golang.org/grpc"
)

type Server struct {
	SerialPort *serial.Port
	protos.UnimplementedSerialServer
}

func (s *Server) GetSerialData(req *protos.Request, stream protos.Serial_GetSerialDataServer) error {
	scanner := bufio.NewScanner(s.SerialPort)
	for scanner.Scan() {
		if err := stream.Send(&protos.Response{SerialData: scanner.Text()}); err != nil {
			log.Println("Error sending serial data ", err)
			return err
		}
	}

	return nil
}

func main() {
	c := &serial.Config{Name: "COM5", Baud: 115200}
	s, err := serial.OpenPort(c)
	if err != nil {
		log.Fatalf("Failed to open serial port connection: %v", err)
	}

	lis, err := net.Listen("tcp", fmt.Sprintf("localhost:%d", 9090))
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	fmt.Println("gRPC server is starting at localhost:9090")

	grpcServer := grpc.NewServer()
	protos.RegisterSerialServer(grpcServer, &Server{SerialPort: s})

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("Error while serving: %v", err)
	}
}
