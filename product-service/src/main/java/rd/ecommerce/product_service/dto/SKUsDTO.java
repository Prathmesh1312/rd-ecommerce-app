package rd.ecommerce.product_service.dto;

import rd.ecommerce.product_service.model.SKUs.Color;
import rd.ecommerce.product_service.model.SKUs.Size;

public class SKUsDTO {
	
    private String code;
	private Size size;
	private Color color;
    private int quantity;
    private String image;
	
	public String getCode() {
		return this.code;
	}

	public void setSku(String sku) {
		this.code = sku;
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