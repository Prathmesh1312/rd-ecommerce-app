package rd.ecommerce.user_service.model;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

import rd.ecommerce.user_service.model.Users.Gender;

public class UsersDTO {
	

	@NotBlank(message = "Email is mandatory.")
	@Email(message = "Invalid email format.")
	private String email;

	@NotBlank(message = "Password is mandatory.")
	private String password;

	@NotBlank(message = "Mobile number is mandatory.")
	@Pattern(regexp = "\\d{10}", message = "Mobile number must be 10 digits.")
	private String phonenumber;

	@NotBlank(message = "Gender is mandatory.")
	private Gender gender;

	public Gender getGender() {
		return this.gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}
	
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
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}


}