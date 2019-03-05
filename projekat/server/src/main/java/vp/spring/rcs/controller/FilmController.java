package vp.spring.rcs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vp.spring.rcs.model.Film;
import vp.spring.rcs.service.FilmService;
import vp.spring.rcs.web.dto.CommonResponseDTO;

@RestController
@RequestMapping(value = "api/filmovi")
public class FilmController {

	@Autowired
	FilmService filmService;
	
	
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Page<Film>> findAll(Pageable pageable) {
	Page<Film> filmovi= filmService.findAll(pageable);
	return new ResponseEntity<>(filmovi, HttpStatus.OK);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Film> findOne(@PathVariable Long id) {
	Film film = filmService.findOne(id);

	return new ResponseEntity<>(film, HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.GET, params= {"title", "genre"})
	public ResponseEntity<List<Film>> findByNaslovContainsAndZanr(@RequestParam String title, @RequestParam String genre){
	List<Film> filmovi= filmService.findByNaslovContainsAndZanr(title, genre);

	if(filmovi != null) {
	return new ResponseEntity<>(filmovi, HttpStatus.OK);
	}else {
	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	}

	@RequestMapping(method = RequestMethod.POST)
	ResponseEntity<Film> save(@RequestBody Film film) {
	Film f = filmService.save(film);
	return new ResponseEntity<>(f, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	ResponseEntity<Film> update(@PathVariable Long id, @RequestBody Film film){
		Film f = filmService.findOne(id);
		f.setNaslov(film.getNaslov());
		f.setRadnja(film.getRadnja());;
		f.setRadnja(film.getRadnja());
		f.setProjekcije(film.getProjekcije());
		f = filmService.save(f);
		return new ResponseEntity<>(f, HttpStatus.OK);
	}


	@RequestMapping(value="/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<CommonResponseDTO> delete(@PathVariable Long id){

	filmService.delete(id);

	return new ResponseEntity<>(new CommonResponseDTO("deleted"), HttpStatus.OK);
	}
	
	
}
