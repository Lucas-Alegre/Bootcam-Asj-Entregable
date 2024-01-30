package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Productos;
import com.example.demo.repositories.ProductosRepository;

@Service
public class ProductosServices {

	@Autowired
	ProductosRepository ProductosRepository;

	public List<Productos> obtenerProductos() {
		return ProductosRepository.findAll();
	}

	public Optional<Productos> findById(Integer id) {
		return ProductosRepository.findById(id);
	}

	public String cearProductos(Productos productos) {
		ProductosRepository.save(productos);
		return "Productos creado correctamente";
	}

	public String modificarProductos(Integer id, Productos productos) {
		try {
			Productos p = ProductosRepository.findById(id).get();
			p.setNombreProducto(productos.getNombreProducto());
			p.setImagen(productos.getImagen());
			p.setPrecio(productos.getPrecio());
			p.setDescripcion(productos.getDescripcion());
			p.setHabilitado(productos.isHabilitado());
			ProductosRepository.save(p);
			return "Productos " + id + " modificado correctamente.";
		} catch (Exception err) {
			return "Error: El producto no pudo ser modificado.";
		}
	}

	public Productos eliminarProducto(Integer id) {
		try {
			Productos productoToReturn = ProductosRepository.findById(id).get();
			ProductosRepository.deleteById(id);
			return productoToReturn;
		} catch (Exception err) {
			err.getMessage();
		}
		return null;
	}

}
