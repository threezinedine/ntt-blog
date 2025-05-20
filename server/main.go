package main

import (
	"fmt"
	"myblogserver/apis/features/users"
	"myblogserver/apis/middlewares"
	"myblogserver/apis/utilities"
	"net/http"
)

func main() {
	var mux *http.ServeMux = http.NewServeMux()
	var muxWrap utilities.ServeMuxWrap = utilities.ServeMuxWrap{
		Mux:         mux,
		Middlewares: []middlewares.GlobalMiddleWare{},
	}

	const API_BASE string = "/apis"
	const PORT int = 8080

	muxWrap.AddMiddleware(middlewares.LogMiddleware)

	muxWrap.HandleFunc(fmt.Sprintf("POST %s/users/register", API_BASE),
		middlewares.JsonTypeRequestValidation(users.RegisterNewUser))

	fmt.Printf("[INFO] Starting server at port: %d\n", PORT)
	http.ListenAndServe(fmt.Sprintf(":%d", PORT), muxWrap.Mux)
}
