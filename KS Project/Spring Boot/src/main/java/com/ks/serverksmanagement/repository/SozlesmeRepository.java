package com.ks.serverksmanagement.repository;

import com.ks.serverksmanagement.model.Sozlesme;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SozlesmeRepository extends JpaRepository<Sozlesme, Long> {

    Optional<Sozlesme> findBytaraf1id(long taraf1id);
    Optional<Sozlesme> findBytaraf2id(long taraf2id);
}
