package com.example.demo.repository;

import com.example.demo.data.Person;
import com.example.demo.data.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface PersonRepository  extends MongoRepository<Person,String> {


    Person save(Person person);
}
