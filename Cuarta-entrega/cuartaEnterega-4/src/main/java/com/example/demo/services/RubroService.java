package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.models.Rubro;
import com.example.demo.repositories.RubroRepository;
@Service
public class RubroService {
	
	@Autowired
	RubroRepository rubroRepository;

	public List<Rubro> obtenerRubro() {
		return rubroRepository.findAll();
	}
	
}
