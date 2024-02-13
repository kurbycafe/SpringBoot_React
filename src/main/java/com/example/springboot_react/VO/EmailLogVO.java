package com.example.springboot_react.VO;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Objects;

@Setter
@Getter

@Entity
@Table(name = "EMAIL_LOG_TABLE", schema = "HotelReservation", catalog = "")
public class EmailLogVO {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "LOG_IDX")
    private int logIdx;
    @Basic
    @Column(name = "EMAIL_RECIEVER")
    private String emailReciever;
    @Basic
    @Column(name = "EMAIL_CONTENT")
    private String emailContent;
    @Basic
    @Column(name = "EMAIL_SENT_DATE")
    private Timestamp emailSentDate;

    //automatically set the date when the email is sent
    @PrePersist
    public void prePersist() {
        emailSentDate = new Timestamp(System.currentTimeMillis());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmailLogVO that = (EmailLogVO) o;
        return logIdx == that.logIdx && Objects.equals(emailReciever, that.emailReciever) && Objects.equals(emailContent, that.emailContent) && Objects.equals(emailSentDate, that.emailSentDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(logIdx, emailReciever, emailContent, emailSentDate);
    }
}
