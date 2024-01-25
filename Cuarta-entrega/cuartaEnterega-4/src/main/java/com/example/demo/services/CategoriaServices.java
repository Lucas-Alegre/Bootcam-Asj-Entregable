package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Categoria;
import com.example.demo.repositories.CategoriaRepository;

@Service
public class CategoriaServices {
	@Autowired
	CategoriaRepository categoriaRepository;
	
	public List<Categoria> obtenerCategoria() {
		return categoriaRepository.findAll();
	}
	
}
