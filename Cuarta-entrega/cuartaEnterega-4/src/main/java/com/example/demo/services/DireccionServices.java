package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Direccion;
import com.example.demo.repositories. DireccionRepository;

@Service
public class DireccionServices {
	
	@Autowired
	 DireccionRepository  direccionRepository;
	
	public List<Direccion> obtenerDireccion() {
		return direccionRepository.findAll();
	}
	
}
