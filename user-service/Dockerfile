# Use a base image with Java 17 (or your desired version)
FROM openjdk:21

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from your build output to the container
# Replace "target/your-service.jar" with the actual path to your JAR
COPY target/user-service-0.0.1-SNAPSHOT.jar /app/user-service.jar
COPY cloud_sql_proxy /cloud_sql_proxy
COPY key.json /key.json

# Expose the port your Spring Boot application runs on (usually 8080)
EXPOSE 8081

# Command to run your Spring Boot application
ENTRYPOINT ["/bin/sh", "-c", "/cloud_sql_proxy -instances=fair-portal-451506-u2:us-central1:ecommerce-rd-app=tcp:3306 -credential_file=/key.json & java -jar user-service.jar"]
