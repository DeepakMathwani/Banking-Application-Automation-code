describe(' Test Suite for the new testing' , () => {    
    it('verify that this page is login or not', () => {                                                                           
        cy.visit("http://localhost:3000/")   

        // creating new Dashboard

                cy.log('Sign Up Page')
                cy.get('[href="/signup"]').click()
                cy.get('#firstName').type('Sam')
                cy.get('#lastName').type('marquee')
                cy.get('#username').type('Sm')
                cy.get('#password').type('12345')
                cy.get('#confirmPassword').type('12345')
                cy.get('[data-test="signup-submit"]').click()
                

        //Login Credentials 

        cy.log('Sign In Page')
                cy.get('#username').type('Sm')
                cy.get('#password').type('12345')
                cy.get('[name="remember"]').click()
                cy.get('[data-test="signin-submit"]').click()
                cy.get('[data-test="user-onboarding-next"]').click()


        //Create New bank Account
                cy.log('Opening Bank Account')
                cy.get('#bankaccount-bankName-input').type('HDFC Bank')
                cy.get('[placeholder="Routing Number"]').type('103100551')
                cy.get('#bankaccount-accountNumber-input').type('67676787878')
                cy.get('[data-test="bankaccount-submit"]').click()
                cy.get('[data-test="user-onboarding-next"]').click()

        

        //My Account tab
        cy.log("My Account Tab")
                cy.contains("My Account").click()
                cy.get('[placeholder="Email"]').type('sm@yopmail.com')
                cy.get('[placeholder="Email"]').should('be.visible', 'sm@yopmail.com')
                cy.get('[placeholder="Phone Number"]').type('12345678910')
                cy.get('[placeholder="Phone Number"]').should('be.visible', '12345678910')
                cy.get('[type="submit"]').dblclick()
                cy.get('[type="submit"]').should('be.visible', 'save')

        //Bank Accounts
        cy.log("Bank Accounts")
                cy.get('[href="/bankaccounts"]').click()
                cy.contains('HDFC Bank', { timeout: 10000 }).should('be.visible')
                cy.get('[data-test="bankaccount-delete"]').click()
                cy.get('[data-test="bankaccount-new"]').click()
                cy.get('#bankaccount-bankName-input').type('ICICI BANK')
                cy.get('#bankaccount-routingNumber-input').type('784738734')
                cy.get('#bankaccount-accountNumber-input').type('6465736574')
                cy.get('[type="submit"]').click()
                cy.get('[data-test="bankaccount-list-item-yn2oIXwTe"]').should('be.visible', 'ICICI BANK')


        //New Transaction
        cy.log('New Transaction')
                cy.get('[data-test="nav-top-new-transaction"]').click()
                cy.get('[data-test="user-list-item-t45AiwidW"]').click()
                cy.get('#amount').type('250')
                cy.get('#transaction-create-description-input').type('Hey I am sending you amount can you please check it from your bank account did you receive it or not and revert back to me')
                cy.get('[data-test="transaction-create-submit-request"]').should('be.visible', 'REQUEST').click()
                cy.get('.MuiTypography-root.MuiTypography-h6.MuiTypography-colorPrimary.MuiTypography-gutterBottom').eq(1).should('be.visible', 'Hey I am sending you amount can you please check it from your bank account did you receive it or not and revert back to me')
                cy.get('[data-test="new-transaction-create-another-transaction"]').click()
                cy.get('[data-test="nav-top-new-transaction"]').click()
                cy.get('[data-test="user-list-item-t45AiwidW"]').click()
                cy.get('#amount').type('250')
                cy.get('#transaction-create-description-input').type('Hey I am sending you amount can you please check it from your bank account did you receive it or not and revert back to me')
                cy.get('[data-test="transaction-create-submit-payment"]').should('be.visible', 'PAY').click()
                cy.get('.MuiTypography-root.MuiTypography-h6.MuiTypography-colorPrimary.MuiTypography-gutterBottom').eq(1).should('be.visible', 'Paid $250.00 for Hey I am sending you amount can you please check it from your bank account did you receive it or not and revert back to me')
                cy.get('[data-test="new-transaction-return-to-transactions"]').click()

        //Dashboard Tabs
                   cy.log('Dashboard Tabs')
                   cy.get('[href="/contacts"]').click()
                   cy.get('[data-test="empty-list-header"]').eq(0).should('be.visible', 'No Transactions')
                   cy.get('[href="/personal"]').click()
                   cy.get('[data-test="transaction-sender-saYGz9clQ"]').click({ force: true })
                   cy.get('[data-test="transaction-description"]').should('be.visible', 'Hey I am sending you amount can you please check it from your bank account did you receive it or not and revert back to me')
                   cy.get('[data-test="transaction-amount-saYGz9clQ"]').should('be.visible', '-$250.00')
                   cy.get('[data-test="transaction-like-button-saYGz9clQ"]').click()
                   cy.get('[placeholder="Write a comment..."]').type('I hope now you are happy fuck off!!{enter}')
              

        //Notifications
                   cy.log("Notifications")
                   cy.get('[href="/notifications"]').eq(0).should('be.visible', '5')
                   cy.get('[data-test="sidenav-notifications"]').click()
                   cy.get('.MuiTypography-root.MuiListItemText-primary.MuiTypography-body1.MuiTypography-displayBlock').eq(5).should('be.visible', 'Sam marquee commented on a transaction.')
                   cy.get('.MuiTypography-root.MuiListItemText-primary.MuiTypography-body1.MuiTypography-displayBlock').eq(6).should('be.visible', 'Sam marquee commented on a transaction.')
                   cy.get('.MuiTypography-root.MuiListItemText-primary.MuiTypography-body1.MuiTypography-displayBlock').eq(7).should('be.visible', 'Sam marquee liked a transaction')
                   cy.get('[data-test="notification-mark-read-DfYrhbWVd-"]').click()
                   cy.get('.MuiTypography-root.MuiListItemText-primary.MuiTypography-body1.MuiTypography-displayBlock').eq(8).should('be.visible', 'Sam marquee commented on a transaction.')
                   cy.get('[data-test="notification-mark-read-rAPrRNsUHZ"]').click()

        //logout
                   cy.contains('Logout').click()
                   cy.url().should('include', 'signin')    
                
                
        })
})    
