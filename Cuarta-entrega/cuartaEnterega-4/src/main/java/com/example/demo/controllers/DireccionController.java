package com.example.demo.controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.models.Direccion;
import com.example.demo.models.ErrorHandler;
import com.example.demo.services.DireccionServices;

import jakarta.validation.Valid;
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/direccion")
public class DireccionController {

	@Autowired
	DireccionServices direccionServices;

	@GetMapping()
	public ResponseEntity<List<Direccion>> getDireccion() {
		return ResponseEntity.ok(direccionServices.obtenerDireccion());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<Direccion>> getById(@PathVariable Integer id) {
		return ResponseEntity.ok(direccionServices.findById(id));
	}

	@PostMapping("")
	public ResponseEntity<Object> createDireccion(@Valid @RequestBody Direccion direccion,
			BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {

			Map<String, String> errors = new ErrorHandler().validacionDeInput(bindingResult);

			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok(direccionServices.cearDireccion(direccion));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> updateDireccion(@Valid @PathVariable int id, @RequestBody Direccion direccion,
			BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {

			Map<String, String> errors = new ErrorHandler().validacionDeInput(bindingResult);

			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok(direccionServices.modificarDireccion(id, direccion));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Direccion> deleteDireccion(@PathVariable int id) {
		return ResponseEntity.ok(direccionServices.eliminarDireccion(id));
	}
}
