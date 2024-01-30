package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.models.OrdenDeCompra;
import com.example.demo.services.OrdenDeCompraServices;

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
	public ResponseEntity<String> createOrden(@RequestBody OrdenDeCompra orden) {
		return ResponseEntity.ok(ordenDeCompraServices.cearOrdenDeCompra(orden));
	}

	@PutMapping("/{id}")
	public ResponseEntity<String> updateOrden(@PathVariable int id, @RequestBody OrdenDeCompra orden) {
		return ResponseEntity.ok(ordenDeCompraServices.modificarOrdenDeCompra(id, orden));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<OrdenDeCompra> deleteOrden(@PathVariable int id) {
		return ResponseEntity.ok(ordenDeCompraServices.eliminarOrdenDeCompra(id));
	}
}
