package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.models.Contactos;
import com.example.demo.services.ContactosServices;

@RestController
@RequestMapping("/contactos")
public class ContactosController {
	
	@Autowired
	ContactosServices contactosServices;
	
	@GetMapping()
	public ResponseEntity<List<Contactos>> getContactos() {
		return ResponseEntity.ok(contactosServices.obtenerContactos());
    }
	
}
