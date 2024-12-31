Feature: Verify add Employee functionality

    Background: Navigate to add employee page

        Given User Launch the Application
        When User Enter username "admin" and password "admin123"
        And User clicks on login button
        Then User should be navigated to dashboard page
        When User clicks on PIM Menu
        And  User clicks on Add employee submenu

    Scenario Outline: Verify Add employee with Mandotory details
        And User Enter firstname "<firstname>"
        And User Enter lastname "<lastname>"
        And User clicks on Save button
        Then User should see success message
        Examples:
            | firstname | lastname |
            | Raju      | G        |
            | Mahesh    | XYZ      |
            | Devaraju  | ABC      |

    Scenario: Verify Error Messages for Mandotory details
        And User clicks on Save button
        Then User should see error Message for firstname and lastname fields