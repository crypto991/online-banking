package com.userfront.service;

import com.userfront.domain.User;
import com.userfront.domain.security.UserRole;

import java.util.List;
import java.util.Set;

public interface UserService {

    User findByUsername(String username);

    User findByEmail(String email);

    boolean checkUserExists(String username, String email);

    boolean checkUsernameExists(String username);

    boolean checkEmailExists(String email);

    void save (User user);

    User create(User user, Set<UserRole> userRoles);

    User saveUser(User userNew);

    List<User> findUserList();

    void enableUser(String username);

    void disableUser(String username);

}
