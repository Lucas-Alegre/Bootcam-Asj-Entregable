package com.example.demo.models;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="direccion")
public class Direccion {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	@Column(name="dir_id", unique=true, nullable=false)
	private Integer id;
	private String calle;
	private int numCalle;
	private String codigoPostal;
	private Integer loc_id;
	
	public Direccion(Integer id, String calle, int numCalle,String codigoPostal,Integer loc_id) {
		this.id=id;
		this.calle=calle;
		this.numCalle=numCalle;
		this.codigoPostal=codigoPostal;
		this.loc_id=loc_id;
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

	public Integer getLoc_id() {
		return loc_id;
	}

	public void setLoc_id(Integer loc_id) {
		this.loc_id = loc_id;
	}
	

	@Override
	public String toString() {
		return "Direccion [id=" + id + ", calle=" + calle + ", numCalle=" + numCalle + ", codigoPostal=" + codigoPostal
				+ ", loc_id=" + loc_id + "]";
	}
	
	
}
