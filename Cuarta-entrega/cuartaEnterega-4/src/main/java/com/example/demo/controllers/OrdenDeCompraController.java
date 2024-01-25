package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
	
}
