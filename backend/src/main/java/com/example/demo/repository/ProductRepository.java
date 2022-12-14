package com.example.demo.repository;



import com.example.demo.data.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface ProductRepository  extends MongoRepository<Product,String> {


    List<Product> findAll();
}