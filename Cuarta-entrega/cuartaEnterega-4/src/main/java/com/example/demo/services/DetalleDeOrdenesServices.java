package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.models.DetalleDeLaOrden;
import com.example.demo.models.OrdenDeCompra;
import com.example.demo.repositories.DetalleDeLaOrdenRepository;

@Service
public class DetalleDeOrdenesServices {
	@Autowired
	DetalleDeLaOrdenRepository detalleDeLaOrdenRepository;
	
	public List<DetalleDeLaOrden> obtenerDetalleDeOrden() {
		return detalleDeLaOrdenRepository.findAll();
	}
	
	public Optional<DetalleDeLaOrden> findById(Integer id) {
		return detalleDeLaOrdenRepository.findById(id);
	}

	public String cearDetalleOrden(DetalleDeLaOrden detalleOrden) {
		detalleDeLaOrdenRepository.save(detalleOrden);
		return "Detalle de la orden creada correctamente";
	}
	
	public String modificarDetalleOrden( DetalleDeLaOrden detalleOrden) {
		try {
			DetalleDeLaOrden or = detalleDeLaOrdenRepository.findById(detalleOrden.getId()).get();
			or.setDetalleCantidad(detalleOrden.getDetalleCantidad());
			or.setProductosId(detalleOrden.getProductosId());
			detalleDeLaOrdenRepository.save(or);
			return "detalle " + detalleOrden.getId() + " modificada correctamente.";
		} catch (Exception err) {
			return "Error: El detalle compra no pudo ser modificada.";
		}
	}


	public DetalleDeLaOrden eliminarDetalleDeOrden(Integer id) {
		try {
			DetalleDeLaOrden detalleToReturn = detalleDeLaOrdenRepository.findById(id).get();
			detalleDeLaOrdenRepository.deleteById(id);
			return detalleToReturn;
		} catch (Exception err) {
			err.getMessage();
		}
		return null;
	}
	
}
