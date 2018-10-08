#Misc Notes
##Security
  ###XSS (Cross-Site Scripting)
  ####Steps:
  1. Malicious data enters the server via an HTTP request from an untrusted source.
  2. Server-side validation either doesn't exist or is insufficient to catch the attack.
  3. The malicious data is included dynamic content the server sends to a user.
  ####Kinds:
  * Mostly JS but can also be HTML, Flash, or any other kind of code.
  * Two main subtypes:
    1. Persistent - actually saved in the server, and can occur without the attacker specifically targeting users.
    2. Reflective - one-off, and must be triggered by the end user, who clicks on a masked link for example.
  ####Prevention:
  * Validate user input. Consider starting from a whitelist rather than a blacklist as there are many potential inputs that can cause vulnerabilities.


  ###XSRF (Cross-Site Request Forgery)
  ####Steps:
  1. User is logged into a site such as a bank.
  2. On another tab, user clicks on a malicious link.
  3. In the background, the user's authentication to the bank is used to make a transfer.
  ####Prevention
  * Check general headers and CSRF token.

  ###SQL Injection
  ####Steps:
  1. Attacker inputs SQL into an input field.
  2. There is not sufficient validation on the server side and the SQL is run.
  3. The database may be destroyed.
  ####Prevention:
  * Use parametrized queries
  * Validate user input

  ###XSS vs. XSRF vs. SQL Injection
  * XSS can be used to steal data; XSRF can be used to change state.
  * XSS exploits the user's trust in a site; XSRF exploits a site's trust in a user.
  * XSS is used to execute scripts; SQL Injection is used to access the database.
