## Full Stack Code Challenge
This is React + Node.js application that renders a customer's energy accounts, making payments and related logic is out of scope for this project.

The code is split into the Frontend and Backend folders 

### To Run
#### Frontend
Please:
- cd codebase/Frontend/origin-energy-frontend
- npm install
- npm run dev
- Open http://localhost:5173/

This will run our Frontend which is built using TS + React + Vite, we also use Material UI as our componenet library.
This frontend application call our backend for the customer's energy accounts as well as their due charges. There will be no accounts displayed until we run our backend

The features included are: 
- Implement a page that renders a list of customer energy accounts.
- Fetch energy accounts from the backend.
- The accounts should be rendered in a Card UI format stacked on top of each other and centered on the page.
- The account balance should change color based on the value:
    - Positive: green
    - Negative: red
    - Zero: grey
- Implement a filter for filtering accounts by energy type.

#### Backend
In a new terminal please:
- cd codebase/Backend
- npm install
- npm run dev

This is our Backend that will get data from an external API (in this case our mocked data) and process them, calculating the total balance for each account before.
Here in our Backend we expose 1 get endpoint, the Frontend calls this endpoint to gather accounts and their details.
- "/accounts"

We also have tests here so please run
- npm test

The features included are:
- Implement an endpoint to fetch energy accounts which internally calls the energy accounts API and the due charges API.
- The api response should calculate the balance for each account by adding up the due charges for each account.
- Tests


### Design Choices
#### Frontend
For our frontend we seperate into different folders to keep the project modular, readable and scalable.

Vite was chosen because it's really fast. It starts the app quickly and updates the page instantly when we make changes. It also works well with React, TypeScript,  which makes development easier.

We used Material UI (MUI) because it provides a set of ready-made, responsive components that follow modern design standards. This helped us build a clean and consistent UI quickly without writing a lot of custom CSS.

#### Backend
For our backend, we used Express.js with Node.js to keep things simple and efficient. Express was chosen because it's lightweight, unopinionated, and makes setting up RESTful APIs fast and straightforward. 

We kept the backend modular by separating concerns into different files (e.g. routes, controllers), which improves code readability and scalability as the project grows.