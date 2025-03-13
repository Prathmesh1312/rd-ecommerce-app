package rd.ecommerce.product_service.model;
import jakarta.persistence.*;

@Table(name = "sku")
@Entity
public class SKUs {

    //Enumerated types for size and color

    public enum Size
	{S, M, L, XL, XXL;}

    public enum Color
	{Red, Green, Blue, Black, White, Yellow, Purple;}


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products product;
    private String code;
	@Enumerated(EnumType.STRING)
	private Size size;
	@Enumerated(EnumType.STRING)
	private Color color;
    private int quantity;
    private String image;
    //private boolean isactive;   

    

    public Long getId() {
        return this.id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return this.code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Size getSize() {
        return this.size;
    }

    public void setSize(Size size) {
        this.size = size;
    }

    public Color getColor() {
        return this.color;
    }

    public void setColor(Color color) {
        this.color = color;
    }

    public int getQuantity() {
        return this.quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getImage() {
        return this.image;
    }       

    public void setImage(String image) {
        this.image = image;
    }

}
