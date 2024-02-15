package com.example.springboot_react.Controller;

import lombok.Getter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class CareerController {

    @GetMapping("/CareerApply")
    public Map<String, Object>  CareerApply() {
        System.err.println("CareerApply");
        return Map.of("SUCCESS", true);
    }
}
