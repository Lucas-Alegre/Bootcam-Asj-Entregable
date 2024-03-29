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
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

@Entity
@Table(name = "proveedor")
public class Proveedor extends AuditModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Integer id;
	
	@Column(unique = true, nullable = false)
	@NotNull(message="El codigo no puede ser null")
	@NotBlank(message="El codigo no puede estar vacio")
	@Pattern(regexp="^.{2,}$", message = "El codigo debe tener un minimo de 2 catacteres")
	private String codigo;
	
	@Column(unique = true, nullable = false)
	@NotNull(message="La razon social no puede ser null")
	@NotBlank(message="La razon social no puede estar vacia")
	@Pattern(regexp="^.{2,}$", message = "La razon social debe tener un nombre minimo de 2 catacteres")
	private String razonSocial;
	
	@Column(unique = true, nullable = false)
	@NotNull(message="El sitio web no puede ser null")
	@NotBlank(message="El sitio web no puede estar vacio")
	@Pattern(regexp="^.{10,}$", message = "El sitio web debe tener una url minima de 10 catacteres")
	private String sitioWeb;
	
	@Column(unique = true, nullable = false)
	@NotNull(message="La imagen no puede ser null")
	@NotBlank(message="La imagen no puede estar vacio")
	@Pattern(regexp="^.{10,}$", message = "La imagen debe ser una url minima de 10 catacteres")
	private String imagen;
	
	@Column(unique = true, nullable = false)
	@NotNull(message="El cuit no puede ser null")
	@NotBlank(message="El cuit no puede estar vacio")
	@Pattern(regexp="^.{10,}$", message = "El cuit debe tener un nombre minimo de 10 catacteres")
	private String cuit;
	
	@Column(unique = true, nullable = false)
	@NotNull(message="El nombre de una proveedor no puede ser null")
	@NotBlank(message="El nombre de un proveedor no puede estar vacio")
	@Pattern(regexp="^.{2,}$", message = "El proveedor debe tener un nombre minimo de 2 catacteres")
	private String nombreProveedor;
	
	@Column(nullable = false)
	private boolean deleteAt;
	
	@Column(unique = true, nullable = false)
	@NotNull(message="El telefono de un proveedor, no puede ser null")
	@NotBlank(message="El telefono de un proveedor no puede estar vacio")
	@Pattern(regexp="^[0-9]{7,15}$", message = "La proveedor debe tener un telefono valido")
	private String telefono;

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "direc", referencedColumnName = "id", nullable = false)
	private Direccion direc;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "rubro", referencedColumnName = "id", nullable = false)
	private Rubro rubro;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "condIva", referencedColumnName = "id", nullable = false)
	private condicionDeIva condIva;

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "contactos", referencedColumnName = "id", nullable = false)
	private Contactos contactos;

	public Proveedor(Integer id, String codigo, String razonSocial, String sitioWeb, String imagen, String cuit,
			String nombreProveedor, boolean deleteAt, String telefono, Direccion direc, Rubro rubro,
			condicionDeIva condIva, Contactos contactos) {
		this.id = id;
		this.codigo = codigo;
		this.razonSocial = razonSocial;
		this.sitioWeb = sitioWeb;
		this.imagen = imagen;
		this.cuit = cuit;
		this.nombreProveedor = nombreProveedor;
		this.deleteAt = deleteAt;
		this.telefono = telefono;
		this.direc = direc;
		this.rubro = rubro;
		this.condIva = condIva;
		this.contactos = contactos;
	}

	public Proveedor() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getRazonSocial() {
		return razonSocial;
	}

	public void setRazonSocial(String razonSocial) {
		this.razonSocial = razonSocial;
	}

	public String getSitioWeb() {
		return sitioWeb;
	}

	public void setSitioWeb(String sitioWeb) {
		this.sitioWeb = sitioWeb;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public String getCuit() {
		return cuit;
	}

	public void setCuit(String cuit) {
		this.cuit = cuit;
	}

	public String getNombreProveedor() {
		return nombreProveedor;
	}

	public void setNombreProveedor(String nombreProveedor) {
		this.nombreProveedor = nombreProveedor;
	}

	public boolean getDeleteAt() {
		return deleteAt;
	}

	public void setDeleteAt(boolean deleteAt) {
		this.deleteAt = deleteAt;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public Direccion getDirec() {
		return direc;
	}

	public void setDirec(Direccion direc) {
		this.direc = direc;
	}

	public Rubro getRubro() {
		return rubro;
	}

	public void setRubro(Rubro rubro) {
		this.rubro = rubro;
	}

	public condicionDeIva getCondIva() {
		return condIva;
	}

	public void setCondIva(condicionDeIva condIva) {
		this.condIva = condIva;
	}

	public Contactos getContactos() {
		return contactos;
	}

	public void setContactos(Contactos contactos) {
		this.contactos = contactos;
	}

	@Override
	public String toString() {
		return "Proveedor [id=" + id + ", codigo=" + codigo + ", razonSocial=" + razonSocial + ", sitioWeb=" + sitioWeb
				+ ", imagen=" + imagen + ", cuit=" + cuit + ", nombreProveedor=" + nombreProveedor + ", deleteAt="
				+ deleteAt + ", telefono=" + telefono + ", direc=" + direc + ", rubro=" + rubro + ", condIva=" + condIva
				+ ", contactos=" + contactos + "]";
	}

}
