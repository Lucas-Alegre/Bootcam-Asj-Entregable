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
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

@Entity
@Table(name = "detalle_de_orden")
public class DetalleDeLaOrden extends AuditModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Integer id;
	
	@Column(nullable = false)
	@NotNull(message="La cantidad no puede ser null")
	//@NotBlank(message="La cantidad no puede estar vacia")
	private int detalleCantidad;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "ordenId", referencedColumnName = "id", nullable = false)
	private OrdenDeCompra ordenId;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "productoId", referencedColumnName = "id", nullable = false)
	private Productos productosId;

	public DetalleDeLaOrden(Integer id, int detalleCantidad, OrdenDeCompra ordenId, Productos productosId) {
		this.id = id;
		this.detalleCantidad = detalleCantidad;
		this.ordenId = ordenId;
		this.productosId = productosId;
	}

	public DetalleDeLaOrden() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public int getDetalleCantidad() {
		return detalleCantidad;
	}

	public void setDetalleCantidad(int detalleCantidad) {
		this.detalleCantidad = detalleCantidad;
	}

	public OrdenDeCompra getOrdenId() {
		return ordenId;
	}

	public void setOrdenId(OrdenDeCompra ordenId) {
		this.ordenId = ordenId;
	}

	public Productos getProductosId() {
		return productosId;
	}

	public void setProductosId(Productos productosId) {
		this.productosId = productosId;
	}

	@Override
	public String toString() {
		return "DetalleDeLaOrden [id=" + id + ", detalleCantidad=" + detalleCantidad + ", ordenId=" + ordenId
				+ ", productosId=" + productosId + "]";
	}

}
