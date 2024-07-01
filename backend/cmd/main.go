package main

import (
	"log"
	"net/http"

	"github.com/AKRVerz/GoAdmin/database"
	"github.com/AKRVerz/GoAdmin/handlers"

	"github.com/gorilla/mux"
)

func main() {
    // Initialize the database
    database.InitDB()

    // Create a new router
    r := mux.NewRouter()

    // Define the routes and handlers
    r.HandleFunc("/api/users", handlers.CreateUser).Methods("POST")
    r.HandleFunc("/api/users", handlers.GetUsers).Methods("GET")
    r.HandleFunc("/api/users/{id}", handlers.GetUser).Methods("GET")
    r.HandleFunc("/api/users/{id}", handlers.UpdateUser).Methods("PUT")
    r.HandleFunc("/api/users/{id}", handlers.DeleteUser).Methods("DELETE")

    // Start the server
    log.Println("Server is running on port 8080")
    log.Fatal(http.ListenAndServe(":8080", r))
}
