package com.example.springboot_react.Repository;

import com.example.springboot_react.VO.UserTableEntity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class UserRepositoy {

    //create user repository with entitymanager
//save, update, delete, findbyid, findall, etc.


    @PersistenceContext
    EntityManager entityManager;

    public void save(UserTableEntity user) {
       // entityManager.persist(user);
    }
}
