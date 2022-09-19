package com.ks.serverksmanagement.repository;

import com.ks.serverksmanagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findBymail(String mail);

}
