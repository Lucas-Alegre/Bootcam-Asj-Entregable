package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.EstadosDeOrdenes;
import com.example.demo.services.EstadosDeOrdenesServices;

@RestController
@RequestMapping("/estadoDeOrdenes")
public class EstadosDeOrdenesController {
	@Autowired
	EstadosDeOrdenesServices EstadosDeOrdenesServices;
	

	@GetMapping()
	public ResponseEntity<List<EstadosDeOrdenes>> getEstadoDeOrdenes() {
		return ResponseEntity.ok(EstadosDeOrdenesServices.obtenerOrdenesDeCompra());
	}
	
}
