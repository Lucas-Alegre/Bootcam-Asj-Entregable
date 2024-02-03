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
	
	@Column(nullable=false)
	private String calle;
	
	@Column(nullable=false)
	private int numCalle;
	
	@Column(nullable=false)
	private String codigoPostal;
	
	@Column(nullable=false)
	private String localidad;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "provincia", referencedColumnName = "id", nullable = false)
    private Provincia provincia;
	
	public Direccion(Integer id, String calle, int numCalle,String codigoPostal,Provincia provincia) {
		this.id=id;
		this.calle=calle;
		this.numCalle=numCalle;
		this.codigoPostal=codigoPostal;
		this.provincia = provincia;
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
	public String getLocalidad() {
		return localidad;
	}
	public void setLocalidad(String localidad) {
		this.localidad = localidad;
	}
	public Provincia getProvincia() {
		return provincia;
	}
	public void setProvincia(Provincia provincia) {
		this.provincia = provincia;
	}
	@Override
	public String toString() {
		return "Direccion [id=" + id + ", calle=" + calle + ", numCalle=" + numCalle + ", codigoPostal=" + codigoPostal
				+ ", localidad=" + localidad + ", provincia=" + provincia + "]";
	}
	
	
	
	
}
