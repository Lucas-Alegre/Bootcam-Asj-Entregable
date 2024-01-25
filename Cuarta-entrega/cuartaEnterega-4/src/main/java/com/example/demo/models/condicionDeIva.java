package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="condicion_de_iva")
public class condicionDeIva {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="cond_iva_id", unique=true, nullable=false)
	private Integer id;
	private String condNombre;
	
	public condicionDeIva(Integer id, String condNombre) {
		this.id=id;
		this.condNombre=condNombre;
	}
	 public condicionDeIva() {
	  		super();
	  	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCondNombre() {
		return condNombre;
	}

	public void setCondNombre(String condNombre) {
		this.condNombre = condNombre;
	}

	@Override
	public String toString() {
		return "condicionDeIva [id=" + id + ", condNombre=" + condNombre + "]";
	}

	
}
