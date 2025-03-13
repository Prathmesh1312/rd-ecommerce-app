package rd.ecommerce.user_service.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import rd.ecommerce.user_service.model.Users;
import rd.ecommerce.user_service.model.UsersDTO;
import rd.ecommerce.user_service.model.LoginDTO;
import rd.ecommerce.user_service.repository.UsersRepository;

@org.springframework.web.bind.annotation.RestController
@CrossOrigin
public class UsersController {
	@Autowired
	UsersRepository userrepository;

	
	@GetMapping("/users/welcome")
	public String welcome() {
		return "your  User Service rest endpoint works";
	}
	
	@PostMapping("/users/register")
	public ResponseEntity<Object> save(@RequestBody UsersDTO usersDTO) {

		if(usersDTO.getEmail() == null || usersDTO.getEmail().isEmpty()) {
			return generateResponse("Email is required!", HttpStatus.OK, null);
		}

		Optional<Users> user = userrepository.findByEmail(usersDTO.getEmail());
		if(user.isPresent()) {
			return generateResponse("User already exists!", HttpStatus.BAD_REQUEST, null);
		}

		Users users = new Users();
		users.setEmail(usersDTO.getEmail());
		users.setPassword(usersDTO.getPassword());
		users.setPhonenumber(usersDTO.getPhonenumber());
		users.setGender(usersDTO.getGender());
		Users use= userrepository.save(users);
		return generateResponse("User registered successfully!", HttpStatus.OK, use);
	}

	 public static ResponseEntity<Object> generateResponse(String message, HttpStatus status, Object responseObj) {
	        Map<String, Object> map = new HashMap<String, Object>();
	            map.put("message", message);
	            map.put("status", status.value());
	            map.put("data", responseObj);

	            return new ResponseEntity<Object>(map,status);
	    }

	 @PostMapping("/users/login")
	 public ResponseEntity<Object> getItems(@RequestBody LoginDTO loginDTO) {
		 Optional<Users> users = userrepository.findByEmail(loginDTO.getEmail());
		 if(users.isEmpty()) {
			 return generateResponse("User not found!", HttpStatus.ACCEPTED, null);
		 }

		 if(users.isPresent()) {
			if(!users.get().getPassword().equals(loginDTO.getPassword())) {
				return generateResponse("Invalid password!", HttpStatus.BAD_REQUEST, null);
			}
		}
		 return generateResponse("User Logged in!", HttpStatus.OK, users);
	 }

}