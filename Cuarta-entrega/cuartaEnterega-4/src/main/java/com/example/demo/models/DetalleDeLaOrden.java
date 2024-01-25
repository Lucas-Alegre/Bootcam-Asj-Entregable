package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "detalle_de_orden")
public class DetalleDeLaOrden {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;
	private int detalleCantidad;
	private Integer ordenId;
	private Integer productosId;

	public DetalleDeLaOrden(Integer id, int detalleCantidad, Integer ordenId, Integer productosId) {
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

	public Integer getOrdenId() {
		return ordenId;
	}

	public void setOrdenId(Integer ordenId) {
		this.ordenId = ordenId;
	}

	public Integer getProductosId() {
		return productosId;
	}

	public void setProductosId(Integer productosId) {
		this.productosId = productosId;
	}

	@Override
	public String toString() {
		return "DetalleDeLaOrden [id=" + id + ", detalleCantidad=" + detalleCantidad + ", ordenId=" + ordenId
				+ ", productosId=" + productosId + "]";
	}

}
