package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	
	
}
