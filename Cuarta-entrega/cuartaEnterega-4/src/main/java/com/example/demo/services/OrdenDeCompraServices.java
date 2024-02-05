package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.DetalleDeLaOrden;
import com.example.demo.models.OrdenDeCompra;
import com.example.demo.repositories.OrdenDeCompraRepository;

@Service
public class OrdenDeCompraServices {

	@Autowired
	OrdenDeCompraRepository ordenDeCompraRepository;
	@Autowired
	DetalleDeOrdenesServices detalleDeOrdenesServices;
	
	public List<OrdenDeCompra> obtenerOrdenesDeCompra() {
		return ordenDeCompraRepository.findAll();
	}

	public Optional<OrdenDeCompra> findById(Integer id) {
		return ordenDeCompraRepository.findById(id);
	}

	public OrdenDeCompra cearOrdenDeCompra(OrdenDeCompra orden) {
		
		OrdenDeCompra nuevorden = ordenDeCompraRepository.save(orden);
		for (DetalleDeLaOrden detalleOrden : orden.getDetalles()) {
			detalleOrden.setOrdenId(nuevorden);
			detalleDeOrdenesServices.cearDetalleOrden(detalleOrden);
		}
		return nuevorden;
	}

	public String modificarOrdenDeCompra(Integer id, OrdenDeCompra orden) {
		try {
			OrdenDeCompra or = ordenDeCompraRepository.findById(id).get();
			or.setOrdenDireccion(orden.getOrdenDireccion());
			or.setOrdenInformacionRecepcion(orden.getOrdenInformacionRecepcion());
			or.setTotal(orden.getTotal());
			or.setHabilitado(orden.isHabilitado());
			or.setEstadoId(orden.getEstadoId());
			ordenDeCompraRepository.save(or);
			return "Orden de compra " + id + " modificada correctamente.";
		} catch (Exception err) {
			return "Error: La orden de compra no pudo ser modificada.";
		}
	}

	public OrdenDeCompra eliminarOrdenDeCompra(Integer id) {
		try {
			OrdenDeCompra ordenToReturn = ordenDeCompraRepository.findById(id).get();
			ordenDeCompraRepository.deleteById(id);
			return ordenToReturn;
		} catch (Exception err) {
			err.getMessage();
		}
		return null;
	}
}
