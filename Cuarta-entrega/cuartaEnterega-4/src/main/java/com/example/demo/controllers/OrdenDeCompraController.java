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

import com.example.demo.models.ErrorHandler;
import com.example.demo.models.OrdenDeCompra;
import com.example.demo.services.OrdenDeCompraServices;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/ordenDeCompra")
public class OrdenDeCompraController {

	@Autowired
	OrdenDeCompraServices ordenDeCompraServices;

	@GetMapping()
	public ResponseEntity<List<OrdenDeCompra>> getOrdenesCompra() {
		return ResponseEntity.ok(ordenDeCompraServices.obtenerOrdenesDeCompra());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<OrdenDeCompra>> getById(@PathVariable Integer id) {
		return ResponseEntity.ok(ordenDeCompraServices.findById(id));
	}

	@PostMapping("")
	public ResponseEntity<Object> createOrden(@Valid @RequestBody OrdenDeCompra orden, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {

			Map<String, String> errors = new ErrorHandler().validacionDeInput(bindingResult);

			System.out.println(errors);

			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok(ordenDeCompraServices.cearOrdenDeCompra(orden));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> updateOrden(@Valid @PathVariable int id, @RequestBody OrdenDeCompra orden,
			BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {

			Map<String, String> errors = new ErrorHandler().validacionDeInput(bindingResult);

			System.out.println(errors);

			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok(ordenDeCompraServices.modificarOrdenDeCompra(id, orden));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<OrdenDeCompra> deleteOrden(@PathVariable int id) {
		return ResponseEntity.ok(ordenDeCompraServices.eliminarOrdenDeCompra(id));
	}
}
