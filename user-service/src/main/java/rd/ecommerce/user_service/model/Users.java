package rd.ecommerce.user_service.model;
import jakarta.persistence.*;

@Table(name = "user")
@Entity
public class Users {

	@Id
	@jakarta.persistence.GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name = "email" , nullable = false , unique = true)	
	private String email;

	
	private String password;
	private String phonenumber;
	
	public enum Gender
	{Male, Female;}

	@Enumerated(EnumType.STRING)
	private Gender gender;

	public Gender getGender() {
		return this.gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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