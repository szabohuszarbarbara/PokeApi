package com.szhb.pokeapi.repository;

import com.szhb.pokeapi.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {

    Optional<UserModel> findUserByUsername(String username);
    Optional<UserModel> findUserByEmail(String email);
}
