package rd.ecommerce.product_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import rd.ecommerce.product_service.model.Categories;
import rd.ecommerce.product_service.repository.CategoriesRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CategoriesController {

    @Autowired
    private CategoriesRepository categoryRepository;


    @GetMapping("/c/welcome")
	public String welcome() {
		return "your Category Service rest endpoint works";
	}

	public static ResponseEntity<Object> generateResponse(String message, HttpStatus status, Object responseObj) {
	        Map<String, Object> map = new HashMap<String, Object>();
	            map.put("message", message);
	            map.put("status", status.value());
	            map.put("data", responseObj);

	            return new ResponseEntity<Object>(map,status);
 }

    @GetMapping("/c/get/{name}")
    public ResponseEntity<Object> getCategoriesByName(@PathVariable String name) {
		List<Categories> items = categoryRepository.findByName(name);
		return generateResponse("Search Result Data!", HttpStatus.OK, items);
    }



}