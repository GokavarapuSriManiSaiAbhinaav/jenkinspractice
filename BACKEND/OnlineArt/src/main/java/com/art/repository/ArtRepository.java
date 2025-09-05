package com.art.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.art.model.Art;

@Repository
public interface ArtRepository extends JpaRepository<Art, Integer> {

}