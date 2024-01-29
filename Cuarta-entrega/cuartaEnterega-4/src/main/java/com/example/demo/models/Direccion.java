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

@Entity
@Table(name="direccion")
public class Direccion {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	@Column( unique=true, nullable=false)
	private Integer id;
	@Column( unique=true, nullable=false)
	private String calle;
	@Column( unique=true, nullable=false)
	private int numCalle;
	@Column( unique=true, nullable=false)
	private String codigoPostal;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "localidad", referencedColumnName = "id", nullable = false)
    private Localidad localidad;
	
	public Direccion(Integer id, String calle, int numCalle,String codigoPostal,Localidad localidad) {
		this.id=id;
		this.calle=calle;
		this.numCalle=numCalle;
		this.codigoPostal=codigoPostal;
		this.localidad=localidad;
	}
	 public Direccion() {
			super();
		}
	 
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCalle() {
		return calle;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public int getNumCalle() {
		return numCalle;
	}

	public void setNumCalle(int numCalle) {
		this.numCalle = numCalle;
	}

	public String getCodigoPostal() {
		return codigoPostal;
	}

	public void setCodigoPostal(String codigoPostal) {
		this.codigoPostal = codigoPostal;
	}

	
	

	public Localidad getLocalidad() {
		return localidad;
	}
	public void setLocalidad(Localidad localidad) {
		this.localidad = localidad;
	}
	@Override
	public String toString() {
		return "Direccion [id=" + id + ", calle=" + calle + ", numCalle=" + numCalle + ", codigoPostal=" + codigoPostal
				+ ", loc_id=" + localidad + "]";
	}
	
	
}
