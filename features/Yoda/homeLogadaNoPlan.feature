 Feature: Home Logada - User sem plano

     Background: Login com usuário sem Plano
         Given que estou logada com o usuário "automacao_semplano@cowabunga.com" e "Gympass123"

     Scenario: Clicar no Card do Plano - Compra de PLano

        When I click no Botão do Banner 
        Then I click on card the PLan
