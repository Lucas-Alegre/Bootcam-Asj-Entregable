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


import com.example.demo.models.Contactos;
import com.example.demo.models.ErrorHandler;
import com.example.demo.services.ContactosServices;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/contactos")
public class ContactosController {
	
	@Autowired
	ContactosServices contactosServices;
	
	@GetMapping()
	public ResponseEntity<List<Contactos>> getContactos() {
		return ResponseEntity.ok(contactosServices.obtenerContactos());
    }
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Contactos>> getById(@PathVariable Integer id) {
		return ResponseEntity.ok(contactosServices.findById(id));
	}

	@PostMapping("")
	public ResponseEntity<Object> createContactos(@Valid @RequestBody Contactos contactos,
			BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {

			Map<String, String> errors = new ErrorHandler().validacionDeInput(bindingResult);

			System.out.println(errors);

			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok(contactosServices.cearContactos(contactos));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> updateContactos(@Valid @PathVariable int id, @RequestBody Contactos contactos,
			BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {

			Map<String, String> errors = new ErrorHandler().validacionDeInput(bindingResult);

			System.out.println(errors);

			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok(contactosServices.modificarContactos(id, contactos));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Contactos> deleteContactos(@PathVariable int id) {
		return ResponseEntity.ok(contactosServices.eliminarContactos(id));
	}
	
}
