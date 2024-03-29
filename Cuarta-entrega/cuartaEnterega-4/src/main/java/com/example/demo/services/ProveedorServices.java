package com.example.demo.services;

import java.util.List;
import java.util.Optional;

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

	public Optional<Proveedor> findById(Integer id) {
		return proveedorRepository.findById(id);
	}

	public Proveedor cearProveedor(Proveedor proveedor) {
		return proveedorRepository.save(proveedor);
	}

	public String modificarProveedor(Integer id, Proveedor proveedor) {
		try {
			Proveedor p = proveedorRepository.findById(id).get();
			p.setRazonSocial(proveedor.getRazonSocial());
			p.setImagen(proveedor.getImagen());
			p.setSitioWeb(proveedor.getSitioWeb());
			p.setCuit(proveedor.getCuit());
			p.setNombreProveedor(proveedor.getNombreProveedor());
			p.setDirec(proveedor.getDirec());
			p.setContactos(proveedor.getContactos());
			p.setDeleteAt(proveedor.getDeleteAt());
			p.setTelefono(proveedor.getTelefono());
			p.setCondIva(proveedor.getCondIva());
			
			

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
