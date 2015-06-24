# sc-test

[![Build Status](https://travis-ci.org/killercentury/sc-test.svg?branch=master)](https://travis-ci.org/killercentury/sc-test)

This app re-implemented this[https://goo.gl/2EV3zi] partially by using AngularJS. It also leverages lots of build tools from Yeoman. Please find following instructions to run it or refer to their docs for details. Due to limited time, this app is not perfect as I know. However, it should have covered most of the common features and scenarios.

## Install

Run `bower install` and `npm install`

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma and acceptance tests with protractor.

## UX Reconsiderations

* If validation fails, it will automatically focus on the first failed input instead of moving up to the top of the page every time.
* Provide inline error message to guide the user instead of showing all error messages in one area.

## Notice

Please use **2015** as the manufacture year and **"Audi"** or **"BMW"** as car make to play around those dependent select boxes. (The app attampts to simulate the real behavior of those select boxes without backend support. So the sample data is very limited.)

All the responds from the backend API are fake, they may not have proper attributes, structure and relationship as the real API. The intent is just keep every thing very simple for the frontend development.

The Protractor end-to-end tests in the test folder should provide some scenarios I used to drive my development. But there are possibly areas haven't been covered by automated tests yet.

There is still lots of space to improve the modularity of the app, such as break things down to smaller reusable components. However, not only time is limited to do so, but also I prefer a bit more lean way of doing implementation at the earily stage while the structure doesn't has significant drawback yet.

If you check in to the code, you may find CarModel is a model which most of current frontend logic based on. For example, selected manufacture year and manufacturer are used as filter to narrow down to specific car model. Once car model is selected, following selections are provided directly by the attributes of that model, such as transmission type, cylinders, body type. It doesn't mean the real backend API should look like this. Instead, it just allows me to properly implement the dependent select boxes. But code can easily be refactored according to the data provided by the backend API.
