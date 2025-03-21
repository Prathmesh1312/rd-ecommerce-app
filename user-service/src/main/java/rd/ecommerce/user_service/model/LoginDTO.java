package rd.ecommerce.user_service.model;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;


public class LoginDTO {
	

	@NotBlank(message = "Email is mandatory.")
	@Email(message = "Invalid email format.")
	private String email;

	@NotBlank(message = "Password is mandatory.")
	private String password;

	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

}