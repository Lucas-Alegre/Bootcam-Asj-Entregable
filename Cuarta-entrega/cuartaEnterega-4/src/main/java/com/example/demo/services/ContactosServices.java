package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Categoria;
import com.example.demo.models.Contactos;
import com.example.demo.repositories.ContactosRepository;

@Service
public class ContactosServices {

	@Autowired
	ContactosRepository contactosRepository;

	public List<Contactos> obtenerContactos() {
		return contactosRepository.findAll();
	}

	public Optional<Contactos> findById(Integer id) {
		return contactosRepository.findById(id);
	}

	public Contactos cearContactos(Contactos contactos) {
		return contactosRepository.save(contactos);
	}

	public String modificarContactos(Integer id, Contactos contactos) {
		try {
			Contactos c = contactosRepository.findById(id).get();
			c.setEmail(contactos.getEmail());	
			c.setTelefono(contactos.getTelefono());
			c.setRol(contactos.getRol());
			contactosRepository.save(c);
			return "Contactos " + id + " modificado correctamente.";
		} catch (Exception err) {
			return "Error: Los Contactos no pudieron ser modificados.";
		}
	}

	public Contactos eliminarContactos(Integer id) {
		try {
			Contactos contactosToReturn = contactosRepository.findById(id).get();
			contactosRepository.deleteById(id);
			return contactosToReturn;
		} catch (Exception err) {
			err.getMessage();
		}
		return null;
	}

}
