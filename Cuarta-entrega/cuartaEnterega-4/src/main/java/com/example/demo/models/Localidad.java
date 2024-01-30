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
@Table(name="localidad")
public class Localidad {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column( unique=true, nullable=false)
	private Integer id;
	@Column( nullable=false)
	private String nombre;
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "prov", referencedColumnName = "id", nullable = false)
    private Provincia prov;
	
	public Localidad(Integer id, String nombre, Provincia prov) {
		this.id=id; 
		this.nombre=nombre;
		this.prov=prov;
	}
	public Localidad() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Provincia getProv() {
		return prov;
	}
	public void setProv(Provincia prov) {
		this.prov = prov;
	}

	@Override
	public String toString() {
		return "Localidad [id=" + id + ", nombre=" + nombre + ", provId=" + prov + "]";
	}
	
	
}
