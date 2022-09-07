package com.example.demo.controller;


import com.example.demo.data.Product;
import com.example.demo.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;


    @GetMapping("/{id}"  )
    private final Product getProductById(@PathVariable String id) {
        System.out.println(id);
        Product product = new Product();
        return productService.getProductById(id).orElse(product);

    }

    @GetMapping()
    private final List<Product> getAllProducts() {

        return productService.getAllProducts();
    }


}
