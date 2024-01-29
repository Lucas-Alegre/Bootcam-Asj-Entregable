package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="pais")
public class Pais {
	
   @Id
   @GeneratedValue(strategy= GenerationType.IDENTITY)
   @Column(unique = true, nullable = false)
   private Integer id;
   @Column(unique = true, nullable = false)
   private String nombre;
   
   public Pais(Integer id, String nombre) {
	   this.id=id;
	   this.nombre=nombre;
   }
   public Pais() {
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
	return "Pais [id=" + id + ", nombre=" + nombre + "]";
}
   
}
