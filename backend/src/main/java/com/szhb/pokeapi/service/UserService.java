package com.szhb.pokeapi.service;

import com.szhb.pokeapi.model.RegisterModel;
import com.szhb.pokeapi.model.UserModel;
import com.szhb.pokeapi.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@AllArgsConstructor
@Service
public class UserService {
    private UserRepository userRepository;
    private PasswordEncoder encoder;

    public String addUser(RegisterModel body) {
        Optional<UserModel> userByEmail = userRepository.findUserByEmail(body.getEmail());
        Optional<UserModel> userByUsername = userRepository.findUserByUsername(body.getUsername());
        if(userByUsername.isPresent() ) {
            return "Username already taken";
        } else if (userByEmail.isPresent()) {
            return "Email is already is use.";
        }
        UserModel newUser = new UserModel(body.getUsername(), body.getEmail(), encoder.encode(body.getPassword()) );
        userRepository.save(newUser);
        return "success";
    }
}
