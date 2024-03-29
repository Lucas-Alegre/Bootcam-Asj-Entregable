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
import com.example.demo.models.Proveedor;
import com.example.demo.services.ProveedorServices;

import jakarta.validation.Valid;
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
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

	@GetMapping("/{id}")
	public ResponseEntity<Optional<Proveedor>> getById(@PathVariable Integer id) {
		return ResponseEntity.ok(proveedorServices.findById(id));
	}

	@PostMapping("")
	public ResponseEntity<Object> createProveedor(@Valid @RequestBody Proveedor proveedor, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {

			Map<String, String> errors = new ErrorHandler().validacionDeInput(bindingResult);

			System.out.println(errors);

			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok(proveedorServices.cearProveedor(proveedor));
	}

	@PutMapping("/{id}")
	public ResponseEntity<String> updateProveedor(@PathVariable int id, @RequestBody Proveedor proveedor) {
		return ResponseEntity.ok(proveedorServices.modificarProveedor(id, proveedor));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Proveedor> deleteProveedor(@PathVariable int id) {
		return ResponseEntity.ok(proveedorServices.eliminarProveedor(id));
	}

}
