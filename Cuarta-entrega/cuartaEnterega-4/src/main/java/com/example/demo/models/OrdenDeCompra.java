package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

@Entity
@Table(name = "Orden_de_Compra")
public class OrdenDeCompra extends AuditModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Integer id;
	
	@Column(nullable = false)
	@NotNull(message="La dirección no puede ser null")
	@NotBlank(message="La dirección no puede estar vacia")
	@Pattern(regexp="^.{3,}$", message = "La dirección debe tener un minimo de 3 catacteres")
	private String ordenDireccion;
	
	@Column(nullable = false)
	@NotNull(message="La información de recepción no puede ser null")
	@NotBlank(message="La información de recepción no puede estar vacio")
	@Pattern(regexp="^.{5,}$", message = "La información de recepción debe tener un minimo de 5 catacteres")
	private String ordenInformacionRecepcion;
	
	@Column(nullable = false)
	@NotNull(message="El total de la orden no puede ser null")
	@DecimalMin(value="0.1")
	private float total;
	
	@Column(nullable = false)
	private boolean habilitado;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "proveedorId", referencedColumnName = "id", nullable = false)
	private Proveedor proveedorId;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "estado_id", referencedColumnName = "id", nullable = false)
	private EstadosDeOrdenes estadoId;

	public OrdenDeCompra(Integer id, String ordenDireccion, String ordenInformacionRecepcion, float total,
			boolean habilitado, Proveedor proveedorId, EstadosDeOrdenes estadoId) {
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

	public Proveedor getProveedorId() {
		return proveedorId;
	}

	public void setProveedorId(Proveedor proveedorId) {
		this.proveedorId = proveedorId;
	}

	public EstadosDeOrdenes getEstadoId() {
		return estadoId;
	}

	public void setEstadoId(EstadosDeOrdenes estadoId) {
		this.estadoId = estadoId;
	}

	@Override
	public String toString() {
		return "OrdenDeCompra [id=" + id + ", ordenDireccion=" + ordenDireccion + ", ordenInformacionRecepcion="
				+ ordenInformacionRecepcion + ", total=" + total + ", habilitado=" + habilitado + ", proveedorId="
				+ proveedorId + ", estadoId=" + estadoId + "]";
	}

}
