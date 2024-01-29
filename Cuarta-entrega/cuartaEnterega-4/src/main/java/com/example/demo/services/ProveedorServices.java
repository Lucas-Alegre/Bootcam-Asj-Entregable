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

	public String cearProveedor(Proveedor proveedor) {
		System.out.println("holaaaaaaaaaaaaaaa");
		proveedorRepository.save(proveedor);
		return "Proveedor creada correctamente";
	}

	public String modificarProveedor(Integer id, Proveedor proveedor) {
		try {
			Proveedor p = proveedorRepository.findById(id).get();
			p.setRazonSocial(proveedor.getRazonSocial());
			p.setImagen(proveedor.getImagen());
			p.setSitioWeb(proveedor.getSitioWeb());
			p.setCuit(proveedor.getCuit());
			p.setNombreProveedor(proveedor.getNombreProveedor());
			p.setDeleteAt(proveedor.getDeleteAt());
			p.setTelefono(proveedor.getTelefono());

			proveedorRepository.save(p);

			return "Proveedor " + id + " modificado correctamente.";
		} catch (Exception err) {
			return "Error: el proveedor no pudo ser modificado.";
		}
	}

	public Proveedor eliminarProveedor(Integer id) {
		try {
			Proveedor proveedorToReturn = proveedorRepository.findById(id).get();
			proveedorRepository.deleteById(id);
			return proveedorToReturn;
		} catch (Exception err) {
			err.getMessage();
		}
		return null;
	}

}
