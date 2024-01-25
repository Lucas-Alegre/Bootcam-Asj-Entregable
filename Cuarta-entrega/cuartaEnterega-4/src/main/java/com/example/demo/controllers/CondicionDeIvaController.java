package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.condicionDeIva;
import com.example.demo.services.CondicionDeIvaServices;

@RestController
@RequestMapping("/condicionIva")
public class CondicionDeIvaController {

	@Autowired
	CondicionDeIvaServices condicionDeIvaServices;

	@GetMapping()
	public ResponseEntity<List<condicionDeIva>> getLocalidad() {
		return ResponseEntity.ok(condicionDeIvaServices.obtenerCondicionDeIva());
	}
}
