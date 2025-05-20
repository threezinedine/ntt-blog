package users

import (
	"encoding/json"
	users_models "myblogserver/apis/features/users/models"
	"myblogserver/apis/models"
	"net/http"
)

func RegisterNewUser(w http.ResponseWriter, req *http.Request, user models.User) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
}

func LoginUser(w http.ResponseWriter, req *http.Request, user models.User) {
	var userRequest users_models.UserRequest
	var err error = json.NewDecoder(req.Body).Decode(&userRequest)

	w.Header().Set("Content-Type", "application/json")

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	var tokenResponse users_models.TokenResponse = users_models.TokenResponse{
		AccessToken:  "testing",
		RefreshToken: "working",
	}

	var encoder *json.Encoder = json.NewEncoder(w)

	err = encoder.Encode(tokenResponse)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
	}

	w.WriteHeader(http.StatusOK)
}
