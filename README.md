# Redux Feedback Loop

## Description
Weekend project for Redux week! This feedback form passes entries to the final submission for before being sent to the database. The Admin page allows the user to view the stored feedback with the latest feedback displayed at the top of the list. Feedback can also be deleted or marked for follow-up.

## Installation
1. Create a database called "prime_feedback" and copy the provided query text into postgresql.
2. In a project terminal enter "npm install"
3. Open a second termainal, run "npm run client" on one and "npm run server" in the other to fire up the application!

## Useage

Start by clicking the "Click To Begin" button on the home page!

![Home Page](/screenshots/homescreen.png)

Enter a number between 1 and 5 to set values for Feeling, Understanding, and Support on the next 3 pages. A value must be entered on these pages.

![Feeling Page](/screenshots/feeling.png)
![Understanding Page](/screenshots/understanding.png)
![Support Page](/screenshots/support.png)

Enter any comments in the next page. Comments are not requied for submission.

![Comments Page](/screenshots/comments.png)

The review page allows the user to review and edit their entries. Click the submit button to submit the information. There will be an alert to confirm that the data was entered. 

![Review Page](/screenshots/review.png)

Successful submission of data will take the user to the Thank You page. The use can click the "Leave New Feedback" button to start the process again.

![Thank You Page](/screenshots/thankyou.png)

The full list of feedback can be viewed on the admin page where it can be deleted or flagged for follow-up. The user must manually navigate to this page to see the data.

![Admin Page](/screenshots/admin.png)

## Built With
- [React](https://react.dev)
- [Redux](https://react-redux.js.org/)
- [React Router](https://reactrouter.com/en/main)
- [PostgreSQL](https://www.postgresql.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Express](https://expressjs.com/)
- [Material UI](https://mui.com/material-ui/getting-started/overview/)

## Acknowledgment
Thank you to Emerging Digital Academy (www.emergingacademy.org) for supporting me and teaching me the skills needed to complete this project.
# redux-feedback-loop
