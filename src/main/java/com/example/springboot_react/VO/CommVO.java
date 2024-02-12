package com.example.springboot_react.VO;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;
@ToString
public class CommVO {
    @Column(name = "REG_DATE")
    private Timestamp regDate;

    @Column(name = "MOD_IDX")
    private Integer modIdx;

    @Column(name = "REG_IDX")
    private Integer regIdx;

    @Column(name = "MOD_DATE")
    private Timestamp modDate;

    @Column(name = "DELETED_YN")
    private String deletedYn;

    @Column(name = "SHOW_YN")
    private String showYn;
}
