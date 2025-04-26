package users

import (
	"net/http"
	"os/user"
)
func RegisterNewUser(w http.ResponseWriter, req *http.Request, user user.User) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
}