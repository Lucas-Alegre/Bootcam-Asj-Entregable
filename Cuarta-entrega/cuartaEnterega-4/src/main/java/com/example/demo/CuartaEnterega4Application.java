package com.example.demo;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
@EnableJpaAuditing
public class CuartaEnterega4Application {

	public static void main(String[] args) {
		SpringApplication.run(CuartaEnterega4Application.class, args);
		System.out.println("hola bro");
	}
	
	public CorsFilter corsFilter() {
	      CorsConfiguration corsConfiguration = new CorsConfiguration();
	      corsConfiguration.setAllowCredentials(true);
	      corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
	      corsConfiguration.setAllowedHeaders(Arrays.asList("Origin", "Access-Control-Allow-Origin", "Content-Type",
	        "Accept", "Authorization", "Origin, Accept", "X-Requested-With",
	        "Access-Control-Request-Method", "Access-Control-Request-Headers"));
	      corsConfiguration.setExposedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Authorization",
	        "Access-Control-Allow-Origin", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"));
	      corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
	      UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
	      urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
	      return new CorsFilter(urlBasedCorsConfigurationSource);
	     }

}
