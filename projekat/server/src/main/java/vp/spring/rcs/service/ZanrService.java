package vp.spring.rcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import vp.spring.rcs.data.ZanrRepository;
import vp.spring.rcs.model.Zanr;

@Component
public class ZanrService {
	@Autowired
	ZanrRepository zanrRepository;

	public <S extends Zanr> S save(S entity) {
		return zanrRepository.save(entity);
	}

	public Page<Zanr> findAll(Pageable pageable) {
		return zanrRepository.findAll(pageable);
	}

	public List<Zanr> findAll() {
		return zanrRepository.findAll();
	}

	public Zanr findOne(Long id) {
		return zanrRepository.findOne(id);
	}

	public void delete(Long id) {
		zanrRepository.delete(id);
	}
	
	

}
