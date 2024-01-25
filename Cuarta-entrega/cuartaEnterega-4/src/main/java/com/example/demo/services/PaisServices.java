package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.models.Pais;
import com.example.demo.repositories.PaisRepository;


@Service
public class PaisServices {
	

	@Autowired
	PaisRepository paisRepository;
	public List<Pais> obtenerpaises() {
		return paisRepository.findAll();
	}
	
	public String cearVideo(Pais pais) {
		paisRepository.save(pais);
		return "Pais creada correctamente";
	}

}
