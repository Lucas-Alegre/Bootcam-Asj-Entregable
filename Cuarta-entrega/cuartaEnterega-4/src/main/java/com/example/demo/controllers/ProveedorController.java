package com.example.demo.controllers;

import java.util.List;

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


import com.example.demo.models.Proveedor;
import com.example.demo.services.ProveedorServices;

@RestController
@RequestMapping("/proveedores")
public class ProveedorController {
	
	@Autowired
	ProveedorServices proveedorServices;

	@GetMapping()
	public ResponseEntity<List<Proveedor>> getPaises() {
		System.out.println("Soy un buen get controller");
		return ResponseEntity.ok(proveedorServices.obtenerProveedor());
    }
	
	@PostMapping("")
	public ResponseEntity<String> createProveedor(@RequestBody Proveedor proveedor) {
		System.out.println("Soy controlador");
		return ResponseEntity.ok(proveedorServices.cearProveedor(proveedor));
	}
/*
	@PutMapping("/{id}")
	public ResponseEntity<String> updateProveedor(@PathVariable int id, @RequestBody Proveedor proveedor) {
		return ResponseEntity.ok(proveedorServices.modificarProveedor(id,proveedor));
	}
*/
	@DeleteMapping("/{id}")
	public ResponseEntity<Proveedor> deleteProveedor(@PathVariable int id) {
		return ResponseEntity.ok(proveedorServices.eliminarProveedor(id));
	}
	

}
