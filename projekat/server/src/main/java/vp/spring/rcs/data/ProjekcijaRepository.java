package vp.spring.rcs.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vp.spring.rcs.model.Projekcija;

@Repository
public interface ProjekcijaRepository extends JpaRepository<Projekcija, Long> {

}
