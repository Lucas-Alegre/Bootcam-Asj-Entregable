package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Categoria;
import com.example.demo.models.Proveedor;
import com.example.demo.repositories.CategoriaRepository;

@Service
public class CategoriaServices {
	@Autowired
	CategoriaRepository categoriaRepository;

	public List<Categoria> obtenerCategoria() {
		return categoriaRepository.findAll();
	}

	public Optional<Categoria> findById(Integer id) {
		return categoriaRepository.findById(id);
	}

	public String cearCategoria(Categoria categoria) {
		categoriaRepository.save(categoria);
		return "Categoria creada correctamente";
	}

	public String modificarCategoria(Integer id, Categoria categoria) {
		try {
			Categoria c = categoriaRepository.findById(id).get();
			c.setNombre(categoria.getNombre());
			categoriaRepository.save(c);
			return "Categoria " + id + " modificada correctamente.";
		} catch (Exception err) {
			return "Error: La categoria no pudo ser modificada.";
		}
	}

	public Categoria eliminarCategoria(Integer id) {
		try {
			Categoria categoriaToReturn = categoriaRepository.findById(id).get();
			categoriaRepository.deleteById(id);
			return categoriaToReturn;
		} catch (Exception err) {
			err.getMessage();
		}
		return null;
	}

}
