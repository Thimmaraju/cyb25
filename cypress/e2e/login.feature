Feature: Verify Login Functionality

    Login positive and negative tests

    Scenario: Verify Login with Valid credentials
        Given User Launch the Application
        When User Enter username "admin" and password "admin123"
        And User clicks on login button
        Then User should be navigated to dashboard page

    Scenario: Verify Login with Valid username and invalid password
        Given User Launch the Application
        When User Enter username "admin" and password "ierghry"
        And User clicks on login button
        Then User should get login error message

    Scenario: Verify Login with invalid username and valid password
        Given User Launch the Application
        When User Enter username "jghr" and password "admin123"
        And User clicks on login button
        Then User should get login error message

    # Scenario: Verify Login with invalid username and invalid password
    #     Given User Launch the Application
    #     When User Enter username "jghr" and password "dgererjer"
    #     And User clicks on login button
    #     Then User should get login error message