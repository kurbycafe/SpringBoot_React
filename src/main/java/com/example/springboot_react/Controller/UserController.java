package com.example.springboot_react.Controller;

import com.example.springboot_react.Service.UserService;
import com.example.springboot_react.VO.UserTableEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * UserController
 * for handling user requests and responses login, register, update, delete, etc.
 */
@RestController
@RequiredArgsConstructor

public class UserController {

    private final UserService userService;

    private final Mail mail;


    //mapping for user signup action
    @PostMapping("/signupAction")
    //getting user data from frontend to UserTableEntity
    public Map<String, Object> signup(UserTableEntity user) {


        UserTableEntity userResult = userService.findByUserId(user.getUserId());
        if(user.getUserId().equals(userResult.getUserId())) {
            return Map.of("SUCCESS", "Duplicated");
        }
        System.err.println(user.toString());
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setUserPass(passwordEncoder.encode(user.getUserPass()));
        System.err.println("after decoding: " + user.toString());
        //check if user data was successfully saved
         try {
            userService.save(user);
        } catch (DataAccessException e) {
            e.getStackTrace();
            return Map.of("SUCCESS", false);

        }
        return Map.of("SUCCESS", true);
    }

    //Email sending for user verification
    @PostMapping("/sendEmail")
    public Map<String, Object> sendEmail(UserTableEntity user) {


        if(mail.sendMail(user.getUserEmail()).equals("SUCCESS")) {
            return Map.of("SUCCESS", true);
        }
        else {
            return Map.of("SUCCESS", false);
        }




    }
@PostMapping("loginAction")
    public Map<String, Object> login(UserTableEntity user) {

        UserTableEntity userResult = userService.findByUserId(user.getUserId());

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        //compare the password from the frontend and the password from the database
            if (passwordEncoder.matches(user.getUserPass(), userResult.getUserPass())) {
                System.err.println("login success");
                return Map.of("SUCCESS", true);

            } else {
                System.err.println("login failed");
                return Map.of("SUCCESS", false);
            }


    }


}
