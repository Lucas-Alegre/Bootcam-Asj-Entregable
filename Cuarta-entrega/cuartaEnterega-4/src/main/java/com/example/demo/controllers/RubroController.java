package com.example.demo.controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
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
import com.example.demo.models.Rubro;
import com.example.demo.services.RubroService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/rubro")
public class RubroController {

	@Autowired
	RubroService rubroService;

	@GetMapping()
	public ResponseEntity<List<Rubro>> getRubro() {
		return ResponseEntity.ok(rubroService.obtenerRubro());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<Rubro>> getById(@PathVariable Integer id) {
		return ResponseEntity.ok(rubroService.findById(id));
	}

	@PostMapping("")
	public ResponseEntity<Object> createRubro(@Valid @RequestBody Rubro rubro, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {

			Map<String, String> errors = new ErrorHandler().validacionDeInput(bindingResult);

			System.out.println(errors);

			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok(rubroService.cearRubro(rubro));
	}

	@PutMapping("/{id}")
	public ResponseEntity<String> updateRubro(@PathVariable int id, @RequestBody Rubro rubro) {
		return ResponseEntity.ok(rubroService.modificarRubro(id, rubro));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Rubro> deleteRubro(@PathVariable int id) {
		return ResponseEntity.ok(rubroService.eliminarRubro(id));
	}

}
