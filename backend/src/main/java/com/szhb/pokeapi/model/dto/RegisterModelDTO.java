package com.szhb.pokeapi.model.dto;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterModelDTO {
    @NotNull
    private String username;
    @NotNull
    private String email;
    @NotNull
    private String password;
}
