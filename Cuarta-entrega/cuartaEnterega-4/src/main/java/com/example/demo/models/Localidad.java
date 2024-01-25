package com.example.demo.models;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="localidad")
public class Localidad {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="loc_id", unique=true, nullable=false)
	private Integer id;
	private String nombre;
	private Integer provId;
	
	public Localidad(Integer id, String nombre, Integer provId) {
		this.id=id; 
		this.nombre=nombre;
		this.provId=provId;
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

	public Integer getProvId() {
		return provId;
	}

	public void setProvId(Integer provId) {
		this.provId = provId;
	}

	@Override
	public String toString() {
		return "Localidad [id=" + id + ", nombre=" + nombre + ", provId=" + provId + "]";
	}
	
	
}
