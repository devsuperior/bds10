package com.devsuperior.bds10.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.bds10.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
