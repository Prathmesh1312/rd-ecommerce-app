package rd.ecommerce.product_service.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import rd.ecommerce.product_service.model.*;
import java.util.List;


public interface ProductsRepository extends JpaRepository<Products, Integer>{

    List<Products> findByName(String name);

    List<Products> queryByNameContains(String query);
}
