package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Categoria;
import com.example.demo.services.CategoriaServices;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {
	

	@Autowired
	CategoriaServices categoriaServices;
	@GetMapping()
	public ResponseEntity<List<Categoria>> getCategoria() {
		return ResponseEntity.ok(categoriaServices.obtenerCategoria());
	}
}
