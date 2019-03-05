package vp.spring.rcs.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vp.spring.rcs.model.Zanr;

@Repository
public interface ZanrRepository extends JpaRepository<Zanr, Long> {

}
