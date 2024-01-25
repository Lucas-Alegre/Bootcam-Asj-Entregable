package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Productos;
import com.example.demo.repositories.ProductosRepository;

@Service
public class ProductosServices {
	
	@Autowired
	ProductosRepository ProductosRepository;
	
	public List<Productos> obtenerProductos() {
		return ProductosRepository.findAll();
	}

}
