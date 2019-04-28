# RaiderClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Requirements:
1. Node.js
2. [Raider Server](https://github.com/SuperSaurfang/raider-server)

## Prepations:
1. open a terminal or shell and run 'npm install' to insall all dependencies
2. Change all values mark with '\<uservalue>' in the envirroment files found in src/enviroment.
    1. Example values for enviroment.ts:
        1. restEndpoint: 123.123.123.123:1234/rest
        2. socketUrl: 123.123.123.123:1234
    2. Example values for enviroment.prod.ts
        1. restEndpoint: /rest
        2. socketUrl: 123.123.123.123:1234
    make sure that the raide listen on the ip and port otherwise it doesn't work!
3. start the raider server

## Run Dev Server:
If all prepations are done you could start the dev server with 'ng serve' when change and save anything the dev server is recompiling the code and reload the website.

## Build project:
With the following command 'ng build --prod --base-href /raider-client/' you could build the 'website'. In the dist folder you found a folder, copy this folder into the public folder from the server
