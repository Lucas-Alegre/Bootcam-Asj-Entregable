package com.example.demo.models;

import java.util.HashSet;
import java.util.Set;

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
@Table(name="provincia")
public class Provincia {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column( unique=true, nullable=false)
	private Integer id;
	@Column( unique=true, nullable=false)
	private String nombre;
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "pais", referencedColumnName = "id", nullable = false)
    private Pais pais;
	
	public Provincia(Integer id, String nombre, Pais pais) {
		this.id= id;
		this.nombre=nombre;
		this.pais=pais;
	}
	public Pais getPais() {
		return pais;
	}
	public void setPais(Pais pais) {
		this.pais = pais;
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


	@Override
	public String toString() {
		return "Provincia [id=" + id + ", nombre=" + nombre + ", paisId=" + pais + "]";
	}
	

	
}
