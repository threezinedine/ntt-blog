package middlewares

import (
	"encoding/json"
	"net/http"
)

func JsonTypeRequestValidation[T any](handler THandleFuncType[T]) http.HandlerFunc {
	return func (w http.ResponseWriter, r *http.Request) {
		if r.Header.Get("Content-Type") != "application/json" {
			http.Error(w, `The content-type must be "application/json"`, http.StatusBadRequest)
			return
		}

		var content T
		var err error = json.NewDecoder(r.Body).Decode(&content)

		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		handler(w, r, content)
	}
}