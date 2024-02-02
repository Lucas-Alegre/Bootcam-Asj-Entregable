package com.example.demo.controllers;

import java.util.HashMap;
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

import com.example.demo.models.Categoria;
import com.example.demo.models.ErrorHandler;
import com.example.demo.models.Proveedor;
import com.example.demo.services.CategoriaServices;

import jakarta.validation.Valid;
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/categoria")
public class CategoriaController {

	@Autowired
	CategoriaServices categoriaServices;

	@GetMapping()
	public ResponseEntity<List<Categoria>> getCategoria() {
		return ResponseEntity.ok(categoriaServices.obtenerCategoria());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<Categoria>> getById(@PathVariable Integer id) {
		return ResponseEntity.ok(categoriaServices.findById(id));
	}

	@PostMapping("")
	public ResponseEntity<Object> createCategoria(@Valid @RequestBody Categoria categoria,
			BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {

			Map<String, String> errors = new ErrorHandler().validacionDeInput(bindingResult);

			System.out.println(errors);

			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok(categoriaServices.cearCategoria(categoria));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> updateCategoria(@Valid @PathVariable int id, @RequestBody Categoria categoria,
			BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {

			Map<String, String> errors = new ErrorHandler().validacionDeInput(bindingResult);

			System.out.println(errors);

			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok(categoriaServices.modificarCategoria(id, categoria));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Categoria> deleteCategria(@PathVariable int id) {
		return ResponseEntity.ok(categoriaServices.eliminarCategoria(id));
	}
}
