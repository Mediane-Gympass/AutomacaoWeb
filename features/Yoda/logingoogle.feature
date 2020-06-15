
# Feature:  Login em Staging - Login com a conta google

#     Scenario Outline:  Login com google  para acessar staging

#         Given acessei a tela de login da google
#         And I insert an email "<emailgoogle>"
#         And I click on Continue button for password
#         And I insert a password "<passwordgoogle>"
#         And I click on Continue button
#        Then I see two fase verification on cell 
#        #Then I should be redirected to Logged Home page

#         Examples:
#             | emailgoogle | passwordgoogle |
#             | taking.mediane.limas@ext.gympass.com  |    MeNeLi123 |