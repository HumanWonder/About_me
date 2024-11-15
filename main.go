package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/projet1", handler)

	http.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("./public/"))))
	fmt.Println("Server started on port 8080 : http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	var address = ""
	switch r.URL.Path {
	case "/projet1":
		address = "./public/templates/projet1.html"
	case "/projet2":
		address = "./public/templates/projet2.html"
	case "/space":
		address = "./public/templates/space.html"
	case "/projet3":
		address = "./public/templates/projet3.html"
	default:
		address = "./public/templates/index.html"
	}

	ts, err := template.ParseFiles(address)
	if err != nil {
		log.Fatal(err)
	}
	ts.Execute(w, nil)
}
