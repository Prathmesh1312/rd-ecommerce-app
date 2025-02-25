package rd.ecommerce.product_service.model;

import jakarta.persistence.*;

@Table(name = "product")
@Entity
public class Products {

	@Id
	@jakarta.persistence.GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	private double price;
	//private String createdTS;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	
}