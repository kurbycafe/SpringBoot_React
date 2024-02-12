package com.example.springboot_react.VO;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "USER_TABLE", schema = "HotelReservation")
@Setter
@Getter
@ToString(
        callSuper = true

)
public class UserTableEntity extends CommVO{

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "USER_IDX")
    private int userIdx;
    
    @Column(name = "USER_NAME")
    private String userName;
    
    @Column(name = "USER_PASS")
    private String userPass;
    
    @Column(name = "USER_EMAIL")
    private String userEmail;
    




}
