package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="contactos")
public class Contactos {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column( unique=true, nullable=false)
	private Integer id;
    @Column( unique=true, nullable=false)
    private String email;
    @Column( unique=true, nullable=false)
    private String telefono;
    @Column( unique=true, nullable=false)
    private String rol;
    
    public Contactos(Integer id, String email, String telefono,  String rol){
    	this.id=id;
    	this.email=email;
    	this.telefono=telefono;
    	this.rol=rol;
    }

    public Contactos() {
    	super();
    }
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getRol() {
		return rol;
	}

	public void setRol(String rol) {
		this.rol = rol;
	}


	@Override
	public String toString() {
		return "Contactos [id=" + id + ", email=" + email + ", telefono=" + telefono + ", rol=" + rol + "]";
	}
    
    
}
