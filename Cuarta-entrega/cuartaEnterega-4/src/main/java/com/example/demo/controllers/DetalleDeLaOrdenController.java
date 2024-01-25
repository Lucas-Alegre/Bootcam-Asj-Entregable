package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
	
}
