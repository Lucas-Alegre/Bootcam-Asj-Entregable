package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Pais;
import com.example.demo.models.Provincia;
import com.example.demo.services.ProvinciaServices;
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/provincias")
public class ProvinciaController {

	@Autowired
	ProvinciaServices provinciaServices;

	@GetMapping()
	public ResponseEntity<List<Provincia>> getPaises() {
		return ResponseEntity.ok(provinciaServices.obtenerProvincias());
    }
	
	@GetMapping("/test")
	public String getTest() {
		return "Soy un test";
    }
	

}
