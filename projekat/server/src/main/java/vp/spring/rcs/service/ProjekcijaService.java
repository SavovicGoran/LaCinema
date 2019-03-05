package vp.spring.rcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import vp.spring.rcs.data.ProjekcijaRepository;
import vp.spring.rcs.model.Projekcija;

@Component
public class ProjekcijaService {
	@Autowired
	ProjekcijaRepository projekcijaRepository;

	public <S extends Projekcija> S save(S entity) {
		return projekcijaRepository.save(entity);
	}

	public Page<Projekcija> findAll(Pageable pageable) {
		return projekcijaRepository.findAll(pageable);
	}

	public List<Projekcija> findAll() {
		return projekcijaRepository.findAll();
	}

	public Projekcija findOne(Long id) {
		return projekcijaRepository.findOne(id);
	}

	public void delete(Long id) {
		projekcijaRepository.delete(id);
	}
	
	

}
