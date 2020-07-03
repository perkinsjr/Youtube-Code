package main

import "fmt"

func main() {
	foods := []string{
		"popcorn",
		"pizza",
		"hotdogs",
		"apples",
	}

	for _, value := range foods {
		fmt.Println(value)
	}
}
