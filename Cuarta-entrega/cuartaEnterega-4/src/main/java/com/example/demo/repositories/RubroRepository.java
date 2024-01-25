package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Localidad;
import com.example.demo.models.Rubro;

public interface RubroRepository extends JpaRepository<Rubro, Integer>{

}
