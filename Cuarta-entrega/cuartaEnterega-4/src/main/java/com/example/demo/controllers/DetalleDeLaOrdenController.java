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

import com.example.demo.models.DetalleDeLaOrden;
import com.example.demo.services.DetalleDeOrdenesServices;

@RestController
@RequestMapping("/detalleDeOrdenes")
public class DetalleDeLaOrdenController {

	@Autowired
	DetalleDeOrdenesServices detalleDeLaOrdenServices;

	@GetMapping()
	public ResponseEntity<List<DetalleDeLaOrden>> getDetalleDeOrdenes() {
		return ResponseEntity.ok(detalleDeLaOrdenServices.obtenerDetalleDeOrden());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<DetalleDeLaOrden>> getById(@PathVariable Integer id) {
		return ResponseEntity.ok(detalleDeLaOrdenServices.findById(id));
	}

	@PostMapping("")
	public ResponseEntity<String> createDetalleOrden(@RequestBody DetalleDeLaOrden detalleOrden) {
		return ResponseEntity.ok(detalleDeLaOrdenServices.cearDetalleOrden(detalleOrden));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<DetalleDeLaOrden> deleteDetalleOrden(@PathVariable int id) {
		return ResponseEntity.ok(detalleDeLaOrdenServices.eliminarDetalleDeOrden(id));
	}
}
