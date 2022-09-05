package com.example.demo.data;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {


     private String productName;
     private String productPicture;
     private String productDescription;
     private double productPrice;
     private String productId;



}
