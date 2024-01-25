package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Productos;

public interface ProductosRepository extends JpaRepository<Productos, Integer>{

}
