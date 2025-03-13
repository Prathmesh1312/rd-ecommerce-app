package rd.ecommerce.product_service.model;
import java.util.Set;
import jakarta.persistence.*;

@Table(name = "product")
@Entity
public class Products {

 	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double price;
	private String image;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "product_category",
            joinColumns = {@JoinColumn(name = "product_id")},
            inverseJoinColumns = {@JoinColumn(name = "category_id")}
    )
    private Set<Categories> categories;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<SKUs> skus;

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	public Set<SKUs> getSkus() {
		return skus;
	}

	public void setSkus(Set<SKUs> skus) {
		this.skus = skus;
	}
}