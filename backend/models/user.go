package models

import "gorm.io/gorm"

// User represents a user model
type User struct {
    gorm.Model
    Name  string `json:"name"`
    Email string `json:"email"`
}
