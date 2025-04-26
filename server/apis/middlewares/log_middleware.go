package middlewares

import (
	"fmt"
	"net/http"
)

func LogMiddleware(handler http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("[INFO] Receive new request %s %s\n", r.Method, r.URL)
		handler(w, r)
	}
}