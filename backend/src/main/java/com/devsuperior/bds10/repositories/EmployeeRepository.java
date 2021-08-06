package com.devsuperior.bds10.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.bds10.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
