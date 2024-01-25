package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.example.demo.models.Pais;
import com.example.demo.models.Proveedor;
import com.example.demo.repositories.ProveedorRepository;

@Service
public class ProveedorServices {
	
	@Autowired
	ProveedorRepository proveedorRepository;
	
	public List<Proveedor> obtenerProveedor() {
		return proveedorRepository.findAll();
	}
	
}
