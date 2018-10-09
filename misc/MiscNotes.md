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

##How the Internet Works
  ###Protocol Definition
  * A set of rules determining how data is transmitted between two apps.

  ###Protocol Stack - 4 Layers:
  1. Application Protocol Layer
    * Protocols specific to applications on a computer.
    * Includes HTTP, Hypertext Transfer Protocol, which is what web browsers and servers (specific applications) use to communicate with one another.
  2. Transmission Control Protocol Layer (TCP)
    * Directs packets to specific protocols via port numbers.
  3. Internet Protocol Layer (IP)
    * Directs packets to specific computers via IP numbers.
  4. Hardware Layer
    * Translates data to binary packet data and back.

  ###DNS
  * The DNS (Domain Name Service) is a distributed database of computers' names (URLs) and IP addresses.
  * No computer has all of the DNS - only a subset.

  ###HTTP
  * HTTP is a text-based application-level protocol.
  * HTTP is connectionless because a new connection must be made for each request.
  * Communication is initiated by the client via a request. The server cannot initiate communication.
  * Anatomy of an HTTP request
    * Two parts: header and an optional body.
      * Header:
        * Request line: the first line of the header is called the request line. The request line contains the appropriate HTTP verb (GET/POST), a URI (uniform resource identifier, /index.html, style.css), and HTTP version number.
        * Headers: these are optional. They describe specific properties of a request. They appear in name:value pairs.
      * Header and body are separated by a blank line.
      * Body:
        * Any other request data we want to send to the server.
  * Header vs body
    * Header for data that is used across the application, to control the processing of the requests. May include API keys, etc.
    * The body is used for data specific to the request.

  ###REST
  * Representational State Transfer
  * A set of constraints for HTTP. Can use HTTP GET, POST, PUT, DELETE.

  ##API
  * Code that allows applications to communicate each other. Defines the correct way for programmers to write code to interact with an application.
