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
import org.springframework.web.bind.annotation.CrossOrigin;
import rd.ecommerce.product_service.dto.ProductsDTO;
import rd.ecommerce.product_service.model.Products;
import rd.ecommerce.product_service.model.SKUs;
import rd.ecommerce.product_service.repository.ProductsRepository;
import rd.ecommerce.product_service.repository.SKUsRepository;

@org.springframework.web.bind.annotation.RestController

@CrossOrigin
public class ProductsController {
	@Autowired
	ProductsRepository productRepo;
	@Autowired
	SKUsRepository skuRepo;
	
	@GetMapping("/p/welcome")
	public String welcome() {
		return "your Product Service rest endpoint works";
	}
	
	//Adding The Product
	@PostMapping("/p/add")
	public ResponseEntity<Object> save(@RequestBody ProductsDTO productDTO) {
		Products product = new Products();
		product.setName(productDTO.getName());
		product.setPrice(productDTO.getPrice());
		Products prod = productRepo.save(product);
		return generateResponse("Items saved successfully!", HttpStatus.OK, prod);
	}

	//Response for the API's
	 public static ResponseEntity<Object> generateResponse(String message, HttpStatus status, Object responseObj) {
	        Map<String, Object> map = new HashMap<String, Object>();
	            map.put("message", message);
	            map.put("status", status.value());
	            map.put("data", responseObj);

	            return new ResponseEntity<Object>(map,status);
	    }

	//SKU's for Product ID API
	@GetMapping("/p/get/{id}")
    public ResponseEntity<Object> getProductById(@PathVariable Long id) {
	
		List<Products> product = productRepo.findById(id);
		return generateResponse("Product Data!", HttpStatus.OK, product);
	}
	//SKU's for Product ID API
	@GetMapping("/p/sku/{id}")
    public ResponseEntity<Object> getSKUsforProduct(@PathVariable Long id) {
	
		List<SKUs> skus = skuRepo.findByProductId(id);
		return generateResponse("SKU Data!", HttpStatus.OK, skus);
	}
    
	//Search Bar API
	@GetMapping("/p/{query}")
    public ResponseEntity<Object> getProductsByQuery(@PathVariable String query) {
		List<Products> items = productRepo.queryByNameContains(query);
		return generateResponse("Search Result Data!", HttpStatus.OK, items);
    }

	//Category Page API
	@GetMapping("/c/{categoryName}")
    public List<Products> getProductByCategoryName(@PathVariable String categoryName) {
		List<Products> items = productRepo.findByCategoriesName(categoryName);
		return items;
    }
}