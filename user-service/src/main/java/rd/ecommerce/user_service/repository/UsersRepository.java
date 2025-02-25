package rd.ecommerce.user_service.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import rd.ecommerce.user_service.model.*;
import java.util.Optional;


public interface UsersRepository extends JpaRepository<Users, Integer>{

    Optional<Users> findByEmail(String email);

}
