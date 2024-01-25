package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.OrdenDeCompra;
import com.example.demo.repositories.OrdenDeCompraRepository;

@Service
public class OrdenDeCompraServices {
	
	@Autowired
	OrdenDeCompraRepository ordenDeCompraRepository;
	
	public List<OrdenDeCompra> obtenerOrdenesDeCompra() {
		return ordenDeCompraRepository.findAll();
	}
}
