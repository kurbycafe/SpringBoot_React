package com.example.springboot_react.Service;

import com.example.springboot_react.Repository.UserRepositoy;
import com.example.springboot_react.VO.UserTableEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepositoy userRepositoy;


    public void save(UserTableEntity user) {
        userRepositoy.save(user);
    }

    public UserTableEntity findByUserEmail(String userEmail) {
        return userRepositoy.findByUserEmail(userEmail);
    }

    public UserTableEntity findByUserId(String userEmail) {
        return userRepositoy.findByUserId(userEmail);
    }
}
