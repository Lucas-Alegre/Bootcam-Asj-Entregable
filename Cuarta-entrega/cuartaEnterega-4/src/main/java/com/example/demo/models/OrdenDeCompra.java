package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Orden_de_Compra")
public class OrdenDeCompra {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ord_id", unique = true, nullable = false)
	private Integer id;
	private String ordenDireccion;
	private String ordenInformacionRecepcion;
	private float total;
	private boolean habilitado;
	private Integer proveedorId;
	private Integer estadoId;

	public OrdenDeCompra(Integer id, String ordenDireccion, String ordenInformacionRecepcion, float total,
			boolean habilitado, Integer proveedorId, Integer estadoId) {
		this.id = id;
		this.ordenDireccion = ordenDireccion;
		this.ordenInformacionRecepcion = ordenInformacionRecepcion;
		this.total = total;
		this.habilitado = habilitado;
		this.proveedorId = proveedorId;
		this.estadoId = estadoId;
	}

	public OrdenDeCompra() {

	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getOrdenDireccion() {
		return ordenDireccion;
	}

	public void setOrdenDireccion(String ordenDireccion) {
		this.ordenDireccion = ordenDireccion;
	}

	public String getOrdenInformacionRecepcion() {
		return ordenInformacionRecepcion;
	}

	public void setOrdenInformacionRecepcion(String ordenInformacionRecepcion) {
		this.ordenInformacionRecepcion = ordenInformacionRecepcion;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	public boolean isHabilitado() {
		return habilitado;
	}

	public void setHabilitado(boolean habilitado) {
		this.habilitado = habilitado;
	}

	public Integer getProveedorId() {
		return proveedorId;
	}

	public void setProveedorId(Integer proveedorId) {
		this.proveedorId = proveedorId;
	}

	public Integer getEstadoId() {
		return estadoId;
	}

	public void setEstadoId(Integer estadoId) {
		this.estadoId = estadoId;
	}

	@Override
	public String toString() {
		return "OrdenDeCompra [id=" + id + ", ordenDireccion=" + ordenDireccion + ", ordenInformacionRecepcion="
				+ ordenInformacionRecepcion + ", total=" + total + ", habilitado=" + habilitado + ", proveedorId="
				+ proveedorId + ", estadoId=" + estadoId + "]";
	}

}
