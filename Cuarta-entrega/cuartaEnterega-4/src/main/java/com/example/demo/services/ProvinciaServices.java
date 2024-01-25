package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Pais;
import com.example.demo.models.Provincia;
import com.example.demo.repositories.PaisRepository;
import com.example.demo.repositories.ProvinciaRepository;

@Service
public class ProvinciaServices {

	@Autowired
	ProvinciaRepository provinciaRepository;
	public List<Provincia> obtenerProvincias() {
		return provinciaRepository.findAll();
	}
	
	public String cearProvincia(Provincia provincia) {
		provinciaRepository.save(provincia);
		return "Pais creada correctamente";
	}
}
