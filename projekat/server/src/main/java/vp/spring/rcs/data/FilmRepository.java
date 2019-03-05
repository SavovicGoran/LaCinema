package vp.spring.rcs.data;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vp.spring.rcs.model.Film;


@Repository
public interface FilmRepository extends JpaRepository<Film, Long> {
	
    public Page<Film> findAll(Pageable pageable);
	
	public List<Film> findByNaslovContains(String naslov);
	

	 public List<Film> findByNaslovContainsAndZanrNazivContains(String title, String genre);

}
