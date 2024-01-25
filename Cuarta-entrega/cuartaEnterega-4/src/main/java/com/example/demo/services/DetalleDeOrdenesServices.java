package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.DetalleDeLaOrden;
import com.example.demo.repositories.DetalleDeLaOrdenRepository;

@Service
public class DetalleDeOrdenesServices {
	@Autowired
	DetalleDeLaOrdenRepository detalleDeLaOrdenRepository;
	
	public List<DetalleDeLaOrden> obtenerDetalleDeOrden() {
		return detalleDeLaOrdenRepository.findAll();
	}
	
}
