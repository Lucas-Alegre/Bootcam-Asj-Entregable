package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.models.Direccion;
import com.example.demo.repositories. DireccionRepository;

@Service
public class DireccionServices {
	
	@Autowired
	 DireccionRepository  direccionRepository;
	
	public List<Direccion> obtenerDireccion() {
		return direccionRepository.findAll();
	}
	
	public Optional<Direccion> findById(Integer id) {
		return direccionRepository.findById(id);
	}

	public Direccion cearDireccion(Direccion direccion) {
		
		return direccionRepository.save(direccion);
	}

	public Object modificarDireccion(Integer id, Direccion direccion) {
		try {
			Direccion d = direccionRepository.findById(id).get();
			d.setCalle(direccion.getCalle());
			d.setCodigoPostal(direccion.getCodigoPostal());
			d.setNumCalle(direccion.getNumCalle());
			d.setLocalidad(direccion.getLocalidad());
			d.setProvincia(direccion.getProvincia());
			
			return direccionRepository.save(d);
		} catch (Exception err) {
			return "Error: La direccion no pudo ser modificada.";
		}
	}

	public Direccion eliminarDireccion(Integer id) {
		try {
			Direccion direccionToReturn = direccionRepository.findById(id).get();
			direccionRepository.deleteById(id);
			return direccionToReturn;
		} catch (Exception err) {
			err.getMessage();
		}
		return null;
	}
	
}
