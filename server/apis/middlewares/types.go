package middlewares

import "net/http"

type GlobalMiddleWare = func(http.HandlerFunc) http.HandlerFunc
type THandleFuncType[T any] = func(http.ResponseWriter, *http.Request, T)