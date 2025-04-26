package models

import "time"

type User struct {
	Id             string `json:"id"`
	Username       string `json:"username"`
	Email          string `json:"email"`
	EmailComfirmed bool   `json:"emailConfirmed"`
	CreatedAt      time.Time `json:"createdAt"`
}