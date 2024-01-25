package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="proveedor")
public class Proveedor {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="proveedor_id", unique=true, nullable=false)
	private Integer id;
    private String codigo;
    private String razonSocial;
    private String sitioWeb;
    private String imagen;
    private String cuit;
    private String nombreProveedor;
    private boolean deleteAt;
    private String telefono;
    private Integer direcId;
    private Integer rubroId;
    private Integer condIvaId;
    
    public Proveedor(Integer id,String codigo,String razonSocial,String sitioWeb,
    		String imagen, String cuit,String nombreProveedor, boolean deleteAt,
    		String telefono, Integer direcId, Integer rubroId, Integer condIvaId) {
    	this.id=id;
    	this.codigo=codigo;
    	this.razonSocial=razonSocial;
    	this.sitioWeb=sitioWeb;
    	this.imagen=imagen;
    	this.cuit=cuit;
    	this.nombreProveedor=nombreProveedor;
    	this.deleteAt=deleteAt;
    	this.telefono=telefono;
    	this.direcId=direcId;
    	this.rubroId=rubroId;
    	this.condIvaId=condIvaId;
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

	public Integer getDirecId() {
		return direcId;
	}

	public void setDirecId(Integer direcId) {
		this.direcId = direcId;
	}

	public Integer getRubroId() {
		return rubroId;
	}

	public void setRubroId(Integer rubroId) {
		this.rubroId = rubroId;
	}

	public Integer getCondIvaId() {
		return condIvaId;
	}

	public void setCondIvaId(Integer condIvaId) {
		this.condIvaId = condIvaId;
	}

	@Override
	public String toString() {
		return "Proveedor [id=" + id + ", codigo=" + codigo + ", razonSocial=" + razonSocial + ", sitioWeb=" + sitioWeb
				+ ", imagen=" + imagen + ", cuit=" + cuit + ", nombreProveedor=" + nombreProveedor + ", deleteAt="
				+ deleteAt + ", telefono=" + telefono + ", direcId=" + direcId + ", rubroId=" + rubroId + ", condIvaId="
				+ condIvaId + "]";
	}
    
}
