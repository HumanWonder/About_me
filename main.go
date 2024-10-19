package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", handler)

	http.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("./public/"))))
	fmt.Println("Server started on port 8080 : http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	ts, err := template.ParseFiles("./public/templates/index.html")
	if err != nil {
		log.Fatal(err)
	}
	ts.Execute(w, nil)
}
