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
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

@Entity
@Table(name = "productos")
public class Productos extends AuditModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Integer id;
	
	@Column(unique = true, nullable = false)
	@NotNull(message="El codigo no puede ser null")
	@NotBlank(message="El codigo no puede estar vacio")
	@Pattern(regexp="^.{2,}$", message = "El codigo debe tener un minimo de 2 catacteres")
	private String codigoSKU;
	
	@Column(nullable = false)
	@NotNull(message="El nombre de un producto no puede ser null")
	@NotBlank(message="El nombre de un producto no puede estar vacio")
	@Pattern(regexp="^.{2,}$", message = "El nombre de un producto debe tener un minimo de 2 catacteres")
	private String nombreProducto;
	
	@Column(unique = true, nullable = false)
	@NotNull(message="La imagen no puede ser null")
	@NotBlank(message="La imagen no puede estar vacio")
	@Pattern(regexp="^.{10,}$", message = "La imagen debe ser una url minima de 10 catacteres")
	private String imagen;
	
	@Column(nullable = false)
	@NotNull(message="La descripción de un producto no puede ser null")
	@NotBlank(message="La descripción de un producto no puede estar vacio")
	@Pattern(regexp="^.{15,}$", message = "La descripción de un producto debe tener un minimo de 15 catacteres")
	private String descripcion;
	
	@Column(nullable = false)
	@NotNull(message="El precio de un producto no puede ser null")
	@NotBlank(message="El precio de un producto no puede estar vacio")
	@DecimalMin(value="0.1")
	private float precio;
	
	@Column(nullable = false)
	private boolean habilitado;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "proveedorId", referencedColumnName = "id", nullable = false)
	private Proveedor proveedorId;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "categoria", referencedColumnName = "id", nullable = false)
	private Categoria categoria;

	public Productos(Integer id, String codigoSKU, String nombreProducto, String imagen, String descripcion,
			float precio, boolean habilitado, Proveedor proveedorId, Categoria categoria) {
		this.id = id;
		this.codigoSKU = codigoSKU;
		this.nombreProducto = nombreProducto;
		this.imagen = imagen;
		this.descripcion = descripcion;
		this.precio = precio;
		this.habilitado = habilitado;
		this.proveedorId = proveedorId;
		this.categoria = categoria;
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
