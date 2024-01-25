package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="productos")
public class Productos {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="prod_id", unique=true, nullable=false)
	private Integer id;
	private String codigoSKU;
	private String nombreProducto;
	private String imagen;
	private String descripcion;
	private float precio;
	private boolean habilitado;
	private Integer proveedorId;
	private Integer catId;
	
	public Productos(Integer id,String codigoSKU,String nombreProducto , String imagen,
			String descripcion, float precio, boolean habilitado, Integer proveedorId,
			Integer catId) {
		this.id=id;
		this.codigoSKU=codigoSKU;
		this.nombreProducto=nombreProducto;
		this.imagen=imagen;
		this.descripcion=descripcion;
	    this.precio=precio;
	    this.habilitado=habilitado;
	    this.proveedorId=proveedorId;
	    this.catId=catId;
	}
	public Productos() {
  		super();
  	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCodigoSKU() {
		return codigoSKU;
	}

	public void setCodigoSKU(String codigoSKU) {
		this.codigoSKU = codigoSKU;
	}

	public String getNombreProducto() {
		return nombreProducto;
	}

	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public float getPrecio() {
		return precio;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
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

	public Integer getCatId() {
		return catId;
	}

	public void setCatId(Integer catId) {
		this.catId = catId;
	}

	@Override
	public String toString() {
		return "Productos [id=" + id + ", codigoSKU=" + codigoSKU + ", nombreProducto=" + nombreProducto + ", imagen="
				+ imagen + ", descripcion=" + descripcion + ", precio=" + precio + ", habilitado=" + habilitado
				+ ", proveedorId=" + proveedorId + ", catId=" + catId + "]";
	}
	

}
