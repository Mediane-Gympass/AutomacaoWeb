
 Feature:  Login Email e Senha - Usuário sem Plano

    Scenario Outline:  Login com Sucesso - Jornada Home não logada para Logada

        Given I am in Gympass home page
        When I click on Log In button
        And I insert an email "<email>"
        And I click on Continue button for password
        And I insert a password "<password>"
        Then I click on Continue button
        ##Then I should be redirected to Logged Home page

       Examples:
            | email | password |
            | automacao_semplano@cowabunga.com | Gympass123    |
           