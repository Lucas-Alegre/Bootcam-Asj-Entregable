package com.example.demo.controllers;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.models.Pais;
import com.example.demo.services.PaisServices;


@RestController
@RequestMapping("/pais")
public class PaisController {

	@Autowired
	PaisServices paisServices;

	@GetMapping()
	public ResponseEntity<List<Pais>> getPaises() {
		return ResponseEntity.ok(paisServices.obtenerpaises());
    }
	
	@GetMapping("/test")
	public String getTest() {
		return "Soy un test";
    }
	
	@PostMapping()
	public ResponseEntity<String> createVideo(@RequestBody Pais pais) {
		return ResponseEntity.ok(paisServices.cearVideo(pais));
	}
	
}
