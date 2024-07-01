package database

import (
	"github.com/AKRVerz/GoAdmin/models"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

// InitDB initializes the database
func InitDB() {
    var err error
    DB, err = gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
    if err != nil {
        panic("failed to connect to database")
    }

    // Migrate the schema
    DB.AutoMigrate(&models.User{})
}
