package com.devsuperior.bds10.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.bds10.entities.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long> {

}
