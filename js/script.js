// Copyright 2022 Rory Mackay All rights reserved
//
// Created by: Rory Mackay
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays if the user correctly guesses a random number
 */
function displayNumber () {
	
	// get user input for min
	let min = parseInt(document.getElementById('min').value)

	// get user input for max
	let max = parseInt(document.getElementById('max').value)

 // initialize counter
	let counter = min

  // initialize numbers as empty string
  let numbers = ""
  
	// WHILE loop
	while (counter <= max) {
    // make number string with comma's
    numbers = numbers + counter + ", "
    // increment the counter
    counter++
  }
  // display sequence back to user
	document.getElementById("message").innerHTML = numbers
} 