FROM openjdk:11-jre-slim

ENV PORT 8080
ENV CLASSPATH /opt/lib
EXPOSE 8080

# Copy jar file
COPY ./basicOntimize-boot/target/basicOntimize-boot.jar /opt/basicOntimize-boot.jar
WORKDIR /opt
CMD ["/bin/bash", "-c", "case $ENVIRONMENT_PROFILE in 'production') java -jar basicOntimize-boot.jar --spring.profiles.active=production;; *) java -jar basicOntimize-boot.jar --spring.profiles.active=staging;; esac;"]
