package vp.spring.rcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import vp.spring.rcs.data.FilmRepository;
import vp.spring.rcs.model.Film;

@Component
public class FilmService {

	@Autowired
	FilmRepository filmRepository;

	public <S extends Film> S save(S entity) {
		return filmRepository.save(entity);
	}

	public Page<Film> findAll(Pageable pageable) {
		return filmRepository.findAll(pageable);
	}

	public List<Film> findAll() {
		return filmRepository.findAll();
	}

	public Film findOne(Long id) {
		return filmRepository.findOne(id);
	}

	public void delete(Long id) {
		filmRepository.delete(id);
	}
	
	
	public List<Film> findByNaslovContainsAndZanr(String title, String genre) {
		return filmRepository.findByNaslovContainsAndZanrNazivContains(title, genre);
		}
	
}
