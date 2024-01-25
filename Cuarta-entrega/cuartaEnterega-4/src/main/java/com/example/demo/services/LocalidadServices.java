package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Localidad;
import com.example.demo.repositories.LocalidadRepository;

@Service
public class LocalidadServices {
	
	@Autowired
	LocalidadRepository LocalidadRepository;
	public List<Localidad> obtenerLocalidad() {
		return LocalidadRepository.findAll();
	}
	
	

}
