package com.userfront.dao;

import com.userfront.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);
}
