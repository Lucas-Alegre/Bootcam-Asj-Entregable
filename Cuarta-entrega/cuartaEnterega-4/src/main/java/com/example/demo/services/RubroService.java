package com.example.demo.services;

import java.util.List;
import java.util.Optional;

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

	public Optional<Rubro> findById(Integer id) {
		return rubroRepository.findById(id);
	}

	public String cearRubro(Rubro rubro) {
		rubroRepository.save(rubro);
		return "Rubro creado correctamente";
	}

	public String modificarRubro(Integer id, Rubro rubro) {
		try {
			Rubro r = rubroRepository.findById(id).get();
			r.setNombre(rubro.getNombre());
			rubroRepository.save(r);
			return "Rubro " + id + " modificado correctamente.";
		} catch (Exception err) {
			return "Error: El rubro no pudo ser modificado.";
		}
	}

	public Rubro eliminarRubro(Integer id) {
		try {
			Rubro rubroToReturn = rubroRepository.findById(id).get();
			rubroRepository.deleteById(id);
			return rubroToReturn;
		} catch (Exception err) {
			err.getMessage();
		}
		return null;
	}
}
