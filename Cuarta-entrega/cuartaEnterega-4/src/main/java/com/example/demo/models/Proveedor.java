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
@Table(name = "proveedor")
public class Proveedor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "proveedor_id", unique = true, nullable = false)
	private Integer id;
	private String codigo;
	private String razonSocial;
	private String sitioWeb;
	private String imagen;
	private String cuit;
	private String nombreProveedor;
	private boolean deleteAt;
	private String telefono;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "direc_id", referencedColumnName = "dir_id", nullable = false)
	private Direccion direc;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "rubro_id", referencedColumnName = "rubro_id", nullable = false)
	private Rubro rubro;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "condIva_id", referencedColumnName = "cond_iva_id", nullable = false)
	private condicionDeIva condIva;

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "contactos_id", referencedColumnName = "cont_id", nullable = false)
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

	public boolean isDeleteAt() {
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
