package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Proveedor;
import com.example.demo.services.ProveedorServices;

@RestController
@RequestMapping("/proveedores")
public class ProveedorController {
	
	@Autowired
	ProveedorServices proveedorServices;

	@GetMapping()
	public ResponseEntity<List<Proveedor>> getPaises() {
		return ResponseEntity.ok(proveedorServices.obtenerProveedor());
    }
	

}
