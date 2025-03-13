package rd.ecommerce.product_service.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import rd.ecommerce.product_service.model.*;


public interface SKUsRepository extends JpaRepository<SKUs, Integer>{

    List<SKUs> findById(Long id);

    List<SKUs> findByProductId(Long id);

}
