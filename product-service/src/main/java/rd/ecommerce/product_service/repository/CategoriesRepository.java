package rd.ecommerce.product_service.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import rd.ecommerce.product_service.model.*;


public interface CategoriesRepository extends JpaRepository<Categories, Integer>{

    List<Categories> findByName(String name);
    List<Categories>  findById(int id);
}
