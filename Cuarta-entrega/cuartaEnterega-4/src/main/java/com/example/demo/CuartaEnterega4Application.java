package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class CuartaEnterega4Application {

	public static void main(String[] args) {
		SpringApplication.run(CuartaEnterega4Application.class, args);
		System.out.println("hola bro");
	}

}
