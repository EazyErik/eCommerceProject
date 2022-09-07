package com.example.demo.data;

import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "person")
@AllArgsConstructor
public class Person {
    @Id
    private String id;
}
