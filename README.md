# Smack That Puppy

## About

Smack That Puppy is a puppy logger with MySQL, Node, Express, Handlebars and a homemade ORM following the MVC design pattern.

## Overview

Smack That Puppy is connected to a mySQL database table called dogbreed containing 99 dog breeds starting with the letters A, B or C. That is more than one-third of the known 271 dog species in the world. The user types in a known dog breed starting with A, B or C and all the information contained about that specific dog is transferred from 'dogbreed' table to 'favedogs' table where all the results in that table are then rendered onto the same page that the user is on.

Depending on the state of the puppy, whether it has been smacked or not, will detrermine what picture the user sees. The idea of 'Smacked to the Future' is a parody on 'Back to the Future' where the Smacked puppies will be transformed into their future self.

## Technologies

This is a full stack application that uses

i. Node and Express servers to handle routing and connection to mySQL database

ii. Express Handlebars and Bootstrap to generate HTML

using the single line input and button clicks by the user.

## Instructions

Input known dog breeds starting with A, B or C. Smack the puppy and see the pup grow into its future self. Press revert to bring the dog back to its puppy self.

## Additional Feature

The input box has an autocomplete function that would search for the string in any part of the phrase. For example, if a user types in terrier, it would look for all terriers starting with the letters A, B or C (eg. Black Russian Terrier, Cairn Terrier would appear for selection)

## Link to Deployment

https://smackthatpuppy.herokuapp.com/

## Future Feature

Will be uploading the remaining 172 dog breeds and their images to complete all known dog breeds in the world.
