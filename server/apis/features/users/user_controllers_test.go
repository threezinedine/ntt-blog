package users

import (
	"bytes"
	"encoding/json"
	users_models "myblogserver/apis/features/users/models"
	"myblogserver/apis/models"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMain(m *testing.M) {
	code := m.Run()

	os.Exit(code)
}

func Test_WhenCreateANewUser_ThenReturns201AndEmptyContent(t *testing.T) {
	var req *http.Request = httptest.NewRequest(http.MethodPost, "/apis/users/register", nil)
	var w *httptest.ResponseRecorder = httptest.NewRecorder()
	var user models.User = models.User{}

	RegisterNewUser(w, req, user)

	var res *http.Response = w.Result()

	defer res.Body.Close()

	assert.Equal(t, res.StatusCode, http.StatusCreated, "Should return created")
}

func Test_WhenLoginSuccessfully_ThenReturn200And2Tokens(t *testing.T) {
	var loginInfo users_models.UserRequest = users_models.UserRequest{
		Username: "threezinedine",
		Password: "threezinedine",
	}

	loginInfoData, err := json.Marshal(loginInfo)

	if err != nil {
		t.Error("Configure error")
	}

	var req *http.Request = httptest.NewRequest(http.MethodPost, "/apis/users/login",
		bytes.NewBuffer(loginInfoData))
	var w *httptest.ResponseRecorder = httptest.NewRecorder()
	var user models.User = models.User{}

	LoginUser(w, req, user)

	var res *http.Response = w.Result()

	defer res.Body.Close()

	assert.Equal(t, res.StatusCode, http.StatusOK, "Should return OK Status")
}
