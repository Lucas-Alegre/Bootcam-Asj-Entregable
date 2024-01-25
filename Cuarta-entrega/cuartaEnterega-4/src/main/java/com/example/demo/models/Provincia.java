package com.example.demo.models;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="provincia")
public class Provincia {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="prov_id", unique=true, nullable=false)
	private Integer id;
	private String nombre;
	private Integer paisId;
	//@ManyToOne
	//private Set<Pais> pais=new HashSet<>();
	
	public Provincia(Integer id, String nombre, Integer paisId) {
		this.id= id;
		this.nombre=nombre;
		this.paisId=paisId;
	}
	public Provincia() {
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

	public Integer getPaisId() {
		return paisId;
	}

	public void setPaisId(Integer paisId) {
		this.paisId = paisId;
	}

	@Override
	public String toString() {
		return "Provincia [id=" + id + ", nombre=" + nombre + ", paisId=" + paisId + "]";
	}
	

	
}
