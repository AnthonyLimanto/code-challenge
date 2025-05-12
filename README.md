## Full Stack Code Challenge
This is React + Node.js application that renders a customer's energy accounts

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