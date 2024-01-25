package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.EstadosDeOrdenes;
import com.example.demo.repositories.EstadosDeOrdenesRepository;

@Service
public class EstadosDeOrdenesServices {
	@Autowired
	EstadosDeOrdenesRepository estadosDeOrdenesRepository;
	
	public List<EstadosDeOrdenes> obtenerOrdenesDeCompra() {
		return estadosDeOrdenesRepository.findAll();
	}
	
}
