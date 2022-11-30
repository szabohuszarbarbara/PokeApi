package com.szhb.pokeapi.controller;

import com.szhb.pokeapi.model.RegisterModel;
import com.szhb.pokeapi.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @PostMapping(value = "/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterModel body){
        System.out.println(body.getUsername());
        String response = userService.addUser(body);
        if(response == "success"){
            return ResponseEntity.ok(body);
        }
        return new ResponseEntity<>(response, HttpStatus.NOT_ACCEPTABLE);
    }
}
