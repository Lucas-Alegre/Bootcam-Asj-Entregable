package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Direccion;
import com.example.demo.models.Localidad;
import com.example.demo.services.DireccionServices;
import com.example.demo.services.LocalidadServices;

@RestController
@RequestMapping("/direccion")
public class DireccionController {

	@Autowired
	DireccionServices direccionServices;

	@GetMapping()
	public ResponseEntity<List<Direccion>> getLocalidad() {
		return ResponseEntity.ok(direccionServices.obtenerDireccion());
	}
}
