package rd.ecommerce.product_service.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import rd.ecommerce.product_service.model.Products;
import rd.ecommerce.product_service.model.ProductsDTO;
import rd.ecommerce.product_service.repository.ProductsRepository;

@org.springframework.web.bind.annotation.RestController
public class ProductsController {
	@Autowired
	ProductsRepository productRepo;
	
	@GetMapping("/products/welcome")
	public String welcome() {
		return "your Product Service rest endpoint works";
	}
	
	@PostMapping("/products/add")
	public ResponseEntity<Object> save(@RequestBody ProductsDTO productDTO) {
		Products product = new Products();
		product.setName(productDTO.getName());
		product.setPrice(productDTO.getPrice());
		Products prod = productRepo.save(product);
		return generateResponse("Items saved successfully!", HttpStatus.OK, prod);
	}

	 public static ResponseEntity<Object> generateResponse(String message, HttpStatus status, Object responseObj) {
	        Map<String, Object> map = new HashMap<String, Object>();
	            map.put("message", message);
	            map.put("status", status.value());
	            map.put("data", responseObj);

	            return new ResponseEntity<Object>(map,status);
	    }

	 @GetMapping("/products/get")
	 public ResponseEntity<Object> getItems(){
		 List<Products> items = productRepo.findAll();
		 return generateResponse("Complete Data!", HttpStatus.OK, items);
	 }

	@GetMapping("/products/get/{name}")
    public ResponseEntity<Object> getProductsByName(@PathVariable String name) {
		List<Products> items = productRepo.findByName(name);
		return generateResponse("Search Result Data!", HttpStatus.OK, items);
    }

	@GetMapping("/products/search/{query}")
    public ResponseEntity<Object> getProductsByQuery(@PathVariable String query) {
		List<Products> items = productRepo.queryByNameContains(query);
		return generateResponse("Search Result Data!", HttpStatus.OK, items);
    }


}