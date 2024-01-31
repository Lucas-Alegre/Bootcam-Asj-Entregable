package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

@Entity
@Table(name="categoria")
public class Categoria {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private Integer id;
	
	@Column(unique=true, nullable=false)
	@NotNull(message="El nombre de una categoría, no puede ser null")
	@NotBlank(message="El nombre de la categoría no puede estar vacio")
	@Pattern(regexp="^.{2,}$", message = "La categoría debe tener un nombre minimo de 2 catacteres")
	private String nombre;
	
	public Categoria(Integer id, String nombre) {
		this.id=id;
		this.nombre=nombre;
	}
	public Categoria() {
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
		return "Categoria [id=" + id + ", nombre=" + nombre + "]";
	}
	

}
