# airport_test_app
Install Docker, then execute the following commands to build:
docker build -t airports-apache2 .
docker run -dit --name airportdelayapp -p 8080:80 airports-apache2
