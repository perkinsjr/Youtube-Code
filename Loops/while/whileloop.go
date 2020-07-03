package main

import "fmt"

func main() {
	number := 1

	for number < 10 {
		number *= 2
		fmt.Println(number)
	}
}
