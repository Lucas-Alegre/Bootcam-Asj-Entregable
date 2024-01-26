package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
	
	 @ManyToOne(fetch = FetchType.EAGER)
	 @JoinColumn(name = "proveedor_id", referencedColumnName = "proveedor_id", nullable = false)
	 private Proveedor proveedorId;
	 
	 @ManyToOne(fetch = FetchType.EAGER)
	 @JoinColumn(name = "cat_id", referencedColumnName = "cat_id", nullable = false)
	 private Categoria categoria;
	 
	 

	
	public Productos(Integer id,String codigoSKU,String nombreProducto , String imagen,
			String descripcion, float precio, boolean habilitado, Proveedor proveedorId,
			Categoria categoria) {
		this.id=id;
		this.codigoSKU=codigoSKU;
		this.nombreProducto=nombreProducto;
		this.imagen=imagen;
		this.descripcion=descripcion;
	    this.precio=precio;
	    this.habilitado=habilitado;
	    this.proveedorId=proveedorId;
	    this.categoria=categoria;
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

	

	public Proveedor getProveedorId() {
		return proveedorId;
	}
	public void setProveedorId(Proveedor proveedorId) {
		this.proveedorId = proveedorId;
	}
	public Categoria getCategoria() {
		return categoria;
	}
	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	@Override
	public String toString() {
		return "Productos [id=" + id + ", codigoSKU=" + codigoSKU + ", nombreProducto=" + nombreProducto + ", imagen="
				+ imagen + ", descripcion=" + descripcion + ", precio=" + precio + ", habilitado=" + habilitado
				+ ", proveedorId=" + proveedorId + ", catId=" + categoria + "]";
	}
	

}
