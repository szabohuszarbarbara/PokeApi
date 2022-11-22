package com.szhb.pokeapi.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.szhb.pokeapi.model.UserModel;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serial;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import lombok.*;

@AllArgsConstructor
@Getter
@Setter

public class AuthUserDetailsImpl implements UserDetails {
  @Serial
  private static final long serialVersionUID = 1L;

  private final Long id;
  private final String username;
  private final String email;
  @JsonIgnore
  private final String password;
  private final Collection<? extends GrantedAuthority> authorities;

  public static AuthUserDetailsImpl build(UserModel user) {
    List<GrantedAuthority> authorities = new ArrayList<>();
    authorities.add(new SimpleGrantedAuthority(user.getRole().name()));

    return new AuthUserDetailsImpl(
            user.getId(),
            user.getUsername(),
            user.getEmail(),
            user.getPassword(),
            authorities);
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o)
      return true;
    if (o == null || getClass() != o.getClass())
      return false;
    AuthUserDetailsImpl user = (AuthUserDetailsImpl) o;
    return Objects.equals(id, user.id);
  }
}
