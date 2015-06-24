# aami

[![Build Status](https://travis-ci.org/killercentury/sc-test.svg?branch=master)](https://travis-ci.org/killercentury/sc-test)

This app is built with AngularJS.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Notice

All the responds from the backend API are fake, they may not have proper attributes, structure and relationship as the real API. The intent is just keep every thing very simple for the frontend development.

CarModel is the central model which most of current frontend logic based on. Selected manufacture year and manufacturer are used as filter to narrow down to specific car model. Once car model is selected, following selections are provided directly by the attributes of that model, such as transmission type, cylinders, body type.
