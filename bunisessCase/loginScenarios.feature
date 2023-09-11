Feature: User Login

  Background:
    Given there are two user profiles, "Private Doctor" and "Private Secretary" with valid credentials

  # Scenario: Successful login with valid credentials (Private Doctor)

  Scenario: Successful login with Private Doctor credentials in Poland
    Given the user is on the "https://www.fakedomain.pl/login" page
    When the user enters valid username "jan.kowalski@example.pl" and password "Hasło123"
    And the user clicks the "Zaloguj" button
    Then the user should be logged in and directed to the homepage

  Scenario: Successful login with Private Doctor credentials in Spain
    Given the user is on the "https://www.fakedomain.es/login" page
    When the user enters valid username "javier.rodriguez@example.es" and password "Contraseña123"
    And the user clicks the "Iniciar sesión" button
    Then the user should be logged in and directed to the homepage

  Scenario: Successful login with Private Doctor credentials in Portugal
    Given the user is on the "joao.silva@example.pt" page
    When the user enters valid username "joao_silva" and password "Senha123"
    And the user clicks the "Iniciar sessão" button
    Then the user should be logged in and directed to the homepage

  # Scenario: Successful login with valid credentials (Private Secretary)

  Scenario: Successful login with Private Secretary credentials in Poland
    Given the user is on the "https://www.fakedomain.pl/login" page
    When the user enters valid username "anna.nowak@example.pl" and password "Hasło123"
    And the user clicks the "Zaloguj" button
    Then the user should be logged in and directed to the homepage

  Scenario: Successful login with Private Secretary credentials in Spain
    Given the user is on the "https://www.fakedomain.es/login" page
    When the user enters valid username "maria.garcia@example.es" and password "Contraseña123"
    And the user clicks the "Iniciar sesión" button
    Then the user should be logged in and directed to the homepage

  Scenario: Successful login with Private Secretary credentials in Portugal
    Given the user is on the "https://www.fakedomain.pt/login" page
    When the user enters valid username "ana.santos@example.pt" and password "Senha123"
    And the user clicks the "Iniciar sessão" button
    Then the user should be logged in and directed to the homepage

  # Scenario: Login with invalid credentials

  Scenario: Login with invalid credentials in Poland
    Given the user is on the "https://www.fakedomain.pl/login" page
    When the user enters invalid username "nieprawidlowy_uzytkownik" and password "zle_haslo"
    And the user clicks the "Zaloguj" button
    Then the user should see an error message "Nieprawidłowy login lub hasło"

  Scenario: Login with invalid credentials in Spain
    Given the user is on the "https://www.fakedomain.es/login" page
    When the user enters invalid username "usuario_invalido" and password "contraseña_incorrecta"
    And the user clicks the "Iniciar sesión" button
    Then the user should see an error message "Usuario o contraseña incorrectos"

  Scenario: Login with invalid credentials in Portugal
    Given the user is on the "https://www.fakedomain.pt/login" page
    When the user enters invalid username "utilizador_invalido" and password "senha_incorreta"
    And the user clicks the "Iniciar sessão" button
    Then the user should see an error message "Utilizador ou palavra-passe inválidos"

  # Scenario: Login with empty fields

  Scenario: Login with empty fields in Poland
    Given the user is on the "https://www.fakedomain.pl/login" page
    When the user leaves the username and password fields empty
    And the user clicks the "Zaloguj" button
    Then the user should see an error message "Oba pola, nazwa użytkownika i hasło, są wymagane"

  Scenario: Login with empty fields in Spain
    Given the user is on the "https://www.fakedomain.es/login" page
    When the user leaves the username and password fields empty
    And the user clicks the "Iniciar sesión" button
    Then the user should see an error message "Ambos campos, nombre de usuario y contraseña, son obligatorios"

  Scenario: Login with empty fields in Portugal
    Given the user is on the "https://www.fakedomain.pt/login" page
    When the user leaves the username and password fields empty
    And the user clicks the "Iniciar sessão" button
    Then the user should see an error message "Ambos os campos, nome de utilizador e palavra-passe, são obrigatórios"

  # Scenario: Forgot password

  Scenario: Forgot password in Poland
    Given the user is on the "https://www.fakedomain.pl/login" page
    When the user clicks the "Zapomniałeś hasła?" link
    Then the user should be redirected to the password reset page

  Scenario: Forgot password in Spain
    Given the user is on the "https://www.fakedomain.es/login" page
    When the user clicks the "¿Has olvidado tu contraseña?" link
    Then the user should be redirected to the password reset page

  Scenario: Forgot password in Portugal
    Given the user is on the "https://www.fakedomain.pt/login" page
    When the user clicks the "Esqueceu-se da palavra-passe?" link
    Then the user should be redirected to the password reset page

  # Scenario: Lockout after multiple failed login attempts

  Scenario: Lockout after multiple failed login attempts in Poland
    Given the user is on the "https://www.fakedomain.pl/login" page
    When the user enters invalid credentials 3 times
    And the user clicks the "Zaloguj" button each time
    Then the user should see an error message "Niewłaściwe hasło. Po dwóch nieudanych próbach logowania zablokujemy Twoje konto na 30 minut. Pamiętaj, że zawsze możesz ustawić nowe hasło."

  Scenario: Lockout after multiple failed login attempts in Spain
    Given the user is on the "https://www.fakedomain.es/login" page
    When the user enters invalid credentials 3 times
    And the user clicks the "Iniciar sesión" button each time
    Then the user should see an error message "Contraseña incorrecta. Después de dos intentos fallidos de inicio de sesión, bloquearemos su cuenta durante 30 minutos. Recuerde que siempre puede configurar una nueva contraseña."

  Scenario: Lockout after multiple failed login attempts in Portugal
    Given the user is on the "https://www.fakedomain.pt/login" page
    When the user enters invalid credentials 3 times
    And the user clicks the "Iniciar sessão" button each time
    Then the user should see an error message "Senha incorreta. Após duas tentativas falhas de login, bloquearemos a sua conta por 30 minutos. Lembre-se de que pode sempre definir uma nova senha."

  # Scenario: Password reset

  Scenario: Password reset in Poland
    Given the user is on the "https://www.fakedomain.pl/password-reset" page
    When the user enters their email address "jan.kowalski@example.pl"
    And the user clicks the "Zresetuj hasło" button
    Then the user should receive a password reset email
    And the user should see a confirmation message "Wysłaliśmy Ci e-mail na adres caiomoloni99@gmail.com z linkiem do utworzenia nowego hasła. Jeśli nie znajdziesz e-maila, proszę sprawdź folder ze spamem."

  Scenario: Password reset in Spain
    Given the user is on the "https://www.fakedomain.es/password-reset" page
    When the user enters their email address "javier.rodriguez@example.es"
    And the user clicks the "Restablecer contraseña" button
    Then the user should receive a password reset email
    And the user should see a confirmation message "Te hemos enviado un correo electrónico a caiomoloni99@gmail.com con el enlace para crear tu nueva contraseña. Si no encuentras el correo electrónico, por favor, revisa tu carpeta de spam."

  Scenario: Password reset in Portugal
    Given the user is on the "https://www.fakedomain.pt/password-reset" page
    When the user enters their email address "joao.silva@example.pt"
    And the user clicks the "Repor palavra-passe" button
    Then the user should receive a password reset email
    And the user should see a confirmation message "Enviamos-lhe um e-mail para caiomoloni99@gmail.com com o link para criar a sua nova senha. Se não encontrar o e-mail, por favor, verifique a sua caixa de spam."
