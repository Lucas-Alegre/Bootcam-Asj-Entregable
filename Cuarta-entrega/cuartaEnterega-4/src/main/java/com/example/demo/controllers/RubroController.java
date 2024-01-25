package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Rubro;
import com.example.demo.services.RubroService;


@RestController
@RequestMapping("/rubro")
public class RubroController {
	
	@Autowired
	RubroService rubroService;

	@GetMapping()
	public ResponseEntity<List<Rubro>> getRubro() {
		return ResponseEntity.ok(rubroService.obtenerRubro());
    }
	
	
}
