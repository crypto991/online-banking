package com.userfront.controller;


import com.userfront.domain.User;
import com.userfront.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.security.Principal;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    public String profile(Principal principal, Model model) {
        User user = userService.findByUsername(principal.getName());

        model.addAttribute("user", user);

        return "profile";
    }


    @RequestMapping(value = "/profile", method = RequestMethod.POST)
    public String profilePost(@ModelAttribute("user") User user, Model model, Principal principal) {
        User userNew = userService.findByUsername(principal.getName());
        userNew.setUsername(user.getUsername());
        userNew.setFirstName(user.getFirstName());
        userNew.setLastName(user.getLastName());
        userNew.setEmail(user.getEmail());
        userNew.setPhone(user.getPhone());

        model.addAttribute("user",userNew);

        userService.saveUser(userNew);

        return "profile";
    }
}
