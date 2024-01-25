package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.condicionDeIva;
import com.example.demo.repositories.CondicionDeIvaRepository;

@Service
public class CondicionDeIvaServices {
	@Autowired
	CondicionDeIvaRepository condicionDeIvaRepository;

	public List<condicionDeIva> obtenerCondicionDeIva() {
		return condicionDeIvaRepository.findAll();
	}
}
