 Feature: Summary - Payment Payroll

     Background: Home logada
         Given que estou logada com usuário sem plano  "automacao_semplano@cowabunga.com" and "Gympass123"
         And   I click no  Banner de plano 
         And   I clico nos Cards
         

     Scenario: Select Plan for Payment Payroll
         When I see Summary
         And I Click Payment
         Then I Click payroll Payment
         And i See resume my plan bought 