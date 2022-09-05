package com.example.demo.controller;


import com.example.demo.data.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {


    @GetMapping("/allProducts")
    private final List<Product> getAllProducts() {
        Product product = new Product("Laptop","https://cdn.pocket-lint.com/r/s/970x/assets/images/149624-laptops-review-hands-on-microsoft-surface-laptop-3-13-5-inch-review-image1-ndijeqz6fw-jpg.webp",
                "Description",
                1499,"ProductId1");

        return List.of(product,product);
    }

    @GetMapping("/productById"  )
    private final Product getProductById(@RequestParam (required = true) String productId) {
        System.out.println(productId);
        Product product = new Product("Laptop","https://cdn.pocket-lint.com/r/s/970x/assets/images/149624-laptops-review-hands-on-microsoft-surface-laptop-3-13-5-inch-review-image1-ndijeqz6fw-jpg.webp",
                "Description",
                1499,"ProductId1");

        return product;
    }
}
