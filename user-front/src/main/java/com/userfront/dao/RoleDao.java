package com.userfront.dao;

import com.userfront.domain.security.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleDao extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
