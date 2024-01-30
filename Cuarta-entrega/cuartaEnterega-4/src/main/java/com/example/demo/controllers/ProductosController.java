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

import com.example.demo.models.Productos;
import com.example.demo.services.ProductosServices;

@RestController
@RequestMapping("/productos")
public class ProductosController {

	@Autowired
	ProductosServices productosServices;

	@GetMapping()
	public ResponseEntity<List<Productos>> getPaises() {
		return ResponseEntity.ok(productosServices.obtenerProductos());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<Productos>> getById(@PathVariable Integer id) {
		return ResponseEntity.ok(productosServices.findById(id));
	}

	@PostMapping("")
	public ResponseEntity<String> createProductos(@RequestBody Productos productos) {
		return ResponseEntity.ok(productosServices.cearProductos(productos));
	}

	@PutMapping("/{id}")
	public ResponseEntity<String> updateProductos(@PathVariable int id, @RequestBody Productos productos) {
		return ResponseEntity.ok(productosServices.modificarProductos(id, productos));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Productos> deleteProductos(@PathVariable int id) {
		return ResponseEntity.ok(productosServices.eliminarProducto(id));
	}
}
