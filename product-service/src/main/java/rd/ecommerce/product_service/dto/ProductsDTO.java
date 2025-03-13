package rd.ecommerce.product_service.dto;

import java.util.Set;

import rd.ecommerce.product_service.model.SKUs;

public class ProductsDTO {
	
	private String name;
	private double price;
	private String image;
  	private Set<SKUs> skus;

	public Set<SKUs> getSkus() {
		return skus;
	}

	public void setSkus(Set<SKUs> skus) {
		this.skus = skus;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}


	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}





}