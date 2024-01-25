package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Localidad;
import com.example.demo.services.LocalidadServices;


@RestController
@RequestMapping("/localidad")
public class LocalidadController {

	@Autowired
	LocalidadServices localidadServices;

	@GetMapping()
	public ResponseEntity<List<Localidad>> getLocalidad() {
		return ResponseEntity.ok(localidadServices.obtenerLocalidad());
    }
	
}
