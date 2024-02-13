package com.example.springboot_react.Controller;

import com.example.springboot_react.VO.EmailLogVO;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class Mail {
    private final JavaMailSender javaMailSender;

    public String sendMail(String receiverEmail) {

        SimpleMailMessage simpleMailMessage= new SimpleMailMessage();

        //EMail content
        simpleMailMessage.setTo(receiverEmail);
        simpleMailMessage.setSubject("Bestätigungscode für Ihre Email");
        simpleMailMessage.setFrom("ssdns6940@gmail.com");
        int randomNum = (int) (Math.random() * 100000);
        simpleMailMessage.setText("Ihre Code ist : " + randomNum);

        EmailLogVO Evo = new EmailLogVO();
        Evo.setEmailReciever(receiverEmail);
        Evo.setEmailContent("Ihre Code ist : " + randomNum);
        try {
            System.err.println("sending email");
            javaMailSender.send(simpleMailMessage);
            //mainService.insertEmailLog(Evo);
        }
        catch (Exception e){
            e.printStackTrace();
            return e.toString();
        }
        return "SUCCESS";
    }

}
