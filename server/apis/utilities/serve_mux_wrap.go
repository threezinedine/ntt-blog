package utilities

import (
	"myblogserver/apis/middlewares"
	"net/http"
)

type ServeMuxWrap struct {
	Mux         *http.ServeMux
	Middlewares []middlewares.GlobalMiddleWare
}

func (s *ServeMuxWrap) HandleFunc(format string, handler http.HandlerFunc) {
	var finalHandler http.HandlerFunc = handler

	for _, middleware := range s.Middlewares {
		finalHandler = middleware(finalHandler)
	}

	s.Mux.HandleFunc(format, finalHandler)
}

func (s *ServeMuxWrap) AddMiddleware(middleware middlewares.GlobalMiddleWare) {
	s.Middlewares = append(s.Middlewares, middleware)
}
