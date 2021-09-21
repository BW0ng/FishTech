# FishTech Technical Assessments
## Overview
The goal of this technical assessment was to create a web application with a NodeJS backend and a React frontend that allowed a user to lookup information about an IP address and/or domain name using WHOIS. The minimum requirements were the following: 
* The application(s) are built and deployed using Docker and hosted on a service of your choice
* User can submit a domain or IP address into a form and data is returned and displayed in the UI
* Use one or more of the WHOIS APIs for accessing IP and domain data
* Frontend is built with React
* Server is built with Node

With the following optional features:
* GraphQL (Apollo RestDataSource possible library)
* TypeScript
* CI/CD
* Unit testing
* Good styling, UX, and responsive

## Project Summary
The project that I created met all of the minimum features as well as implemented GraphQL, CI/CD, and Unit/Integration testing.

## Requirements
* NodeJS
* Yarn
* Docker

## Installation
This project can be run via docker-compose.
```
docker-compose up
```

## Usage
[Try it out in the browser](http://localhost/)

## Backend
The graphQL backend endpoint can be accessed via http://localhost:4000/graphql/

## WHOIS API
https://whois.whoisxmlapi.com/documentation/making-requests

## Articles referenced to build project
[Deploying NodeJS and React App with Docker](https://towardsdatascience.com/deploying-a-react-nodejs-application-with-docker-part-i-of-ii-910bc6edb46e)

[NodeJS GraphQL Backend that Scales](https://javascript.plainenglish.io/writing-a-node-js-graphql-backend-that-actually-scales-a-complete-guide-part-1-setup-cddceae25bdc)

## Future improvements
* Improving styling and UX
* Improving Error handlings and making it more robust
* Better Unit testing and Integration testing
* Refactoring to use Typescript
* Refactoring to make code more readable and maintainable
* Improving to better handle the difference between data between IP address and domain names. 
* Adding security to prevent API rate limiting issues as the WHOIS API has a monthly limit of 500 requests. 
* Refactoring to make both projects more lightweight. Started with create-react-app which is fairly bulky. 
* Performance tuning
* Adding more endpoints to GraphQL API
* Changing query based on if it's requesting IP address vs. domain names. 
* Dark mode support
* linter
* Set up a staging pipeline
* Properly pull out API_KEY and all other environment variables
* Fix Errors 
