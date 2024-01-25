package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Contactos;
import com.example.demo.repositories.ContactosRepository;

@Service
public class ContactosServices {

	@Autowired
	ContactosRepository contactosRepository;

	public List<Contactos> obtenerContactos() {
		return contactosRepository.findAll();
	}
	
}
