# Banking Application Automation code

A professional Cypress automation project that validates the complete user journey of the [Real World App (RWA)](https://github.com/cypress-io/cypress-realworld-app?utm_source=chatgpt.com). This test suite covers user registration, authentication, bank account management, profile updates, financial transactions, notifications, and logout.

---

## Project Overview

This project demonstrates end-to-end (E2E) automation testing using [Cypress](https://www.cypress.io/?utm_source=chatgpt.com). The script simulates a realistic user workflow and validates both UI functionality and business logic.

### Covered Functional Areas

* User Sign Up
* User Login
* User Onboarding
* Bank Account Creation
* Profile Update (My Account)
* Bank Account Deletion and Recreation
* Request Money Transaction
* Send Payment Transaction
* Dashboard Navigation
* Like and Comment on Transactions
* Notifications Validation
* Logout Verification

---

## Tech Stack

* Language: JavaScript
* Test Framework: Cypress
* Assertion Library: Chai (built into Cypress)
* Version Control: [Git](https://git-scm.com/?utm_source=chatgpt.com)
* Repository Hosting: [GitHub](https://github.com/?utm_source=chatgpt.com)

---

## Test Scenario Flow

### 1. User Registration

* Navigate to the Sign Up page.
* Enter:

  * First Name: `Sam`
  * Last Name: `marquee`
  * Username: `Sm`
  * Password: `12345`
* Submit the registration form.

### 2. User Authentication

* Log in using the newly created credentials.
* Enable "Remember Me".
* Complete onboarding.

### 3. Initial Bank Account Setup

* Create a bank account:

  * Bank Name: `HDFC Bank`
  * Routing Number: `103100551`
  * Account Number: `67676787878`

### 4. Profile Management

* Open **My Account**.
* Update:

  * Email: `sm@yopmail.com`
  * Phone Number: `12345678910`
* Save profile details.

### 5. Bank Account Management

* Verify `HDFC Bank` is displayed.
* Delete the account.
* Create a new account:

  * Bank Name: `ICICI BANK`
  * Routing Number: `784738734`
  * Account Number: `6465736574`
* Confirm the new account is listed.

### 6. Transactions

#### Request Money

* Select a recipient.
* Request `$250`.
* Validate the transaction description.

#### Send Payment

* Select the same recipient.
* Pay `$250`.
* Validate the payment confirmation.

### 7. Dashboard Validation

* Verify:

  * Contacts tab
  * Personal tab
  * Transaction amount
  * Transaction description
* Like a transaction.
* Add a comment.

### 8. Notifications

* Validate unread notification count.
* Confirm comment and like notifications.
* Mark notifications as read.

### 9. Logout

* Log out.
* Verify redirection to the Sign In page.

---

## Project Structure

```text
cypress-e2e-testing/
├── cypress/
│   ├── e2e/
│   │   └── userJourney.cy.js
│   ├── fixtures/
│   └── support/
├── cypress.config.js
├── package.json
└── README.md
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-repository-name>.git
cd <your-repository-name>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Application

Ensure the application is running locally at:

```text
http://localhost:3000
```

If using the Cypress Real World App:

```bash
npm run dev
```

### 4. Open Cypress Test Runner

```bash
npx cypress open
```

### 5. Run Tests in Headless Mode

```bash
npx cypress run
```

---

## Test Data Used

| Field              | Value                                   |
| ------------------ | --------------------------------------- |
| First Name         | Sam                                     |
| Last Name          | marquee                                 |
| Username           | Sm                                      |
| Password           | 12345                                   |
| Email              | [sm@yopmail.com](mailto:sm@yopmail.com) |
| Phone Number       | 12345678910                             |
| Initial Bank       | HDFC Bank                               |
| Updated Bank       | ICICI BANK                              |
| Transaction Amount | 250                                     |

---

## Assertions Performed

The automation validates:

* Successful navigation between pages
* Visibility of UI elements
* Correct display of created bank accounts
* Successful profile updates
* Accurate transaction details and amounts
* Notification generation for comments and likes
* Successful logout and redirect to Sign In

---

## Learning Objectives Demonstrated

This project showcases practical use of:

* Cypress commands (`cy.visit`, `cy.get`, `cy.contains`, `cy.type`, `cy.click`)
* Assertions with `.should()`
* DOM traversal with `.eq()`
* Forced interactions with `{ force: true }`
* Logging using `cy.log()`
* End-to-End business workflow automation

---

## Suggested Improvements

For production-quality automation, consider adding:

* Page Object Model (POM)
* Custom Cypress Commands
* Fixtures for externalized test data
* Environment variables for credentials
* API-based test data setup
* Retry and cleanup logic
* CI/CD integration using [GitHub Actions](https://github.com/features/actions?utm_source=chatgpt.com)

---

## Running in CI/CD

Example command:

```bash
npx cypress run --browser chrome
```

This can be integrated into:

* [GitHub Actions](https://github.com/features/actions?utm_source=chatgpt.com)
* [Jenkins](https://www.jenkins.io/?utm_source=chatgpt.com)
* [GitLab CI/CD](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/?utm_source=chatgpt.com)

---

## Author

**Deepak Mathwani**
QA Automation Enthusiast | Cypress Learner

* GitHub: `https://github.com/DeepakMathwani`
* Email: `deepmath456@gmail.com`

---

## License

This project is intended for educational and portfolio purposes.
