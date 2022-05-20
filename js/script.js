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
  
  // initialize counter
	let counter = Min

  // initialize numbers as empty string
  let numbers = ""
	
	// get user input for min
	let numMin = parseInt(document.getElementById('min').value)

	// get user input for max
	let numMax = parseInt(document.getElementById('max').value)

	// WHILE loop
	while ((counter >= min) && (counter <= max)) {
    // make number string with comma's
    numbers = numbers + counter + ", "
    // increment the counter
    counter = counter++
  }
  // display sequence back to user
	document.getElementById("message").innerHTML = numbers
} 