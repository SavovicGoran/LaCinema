package vp.spring.rcs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vp.spring.rcs.model.Zanr;
import vp.spring.rcs.service.ZanrService;

@RestController
@RequestMapping(value = "api/zanrovi")
public class ZanrController {
	
	@Autowired
	ZanrService zanrService;
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<Zanr>> getAll(){
		List<Zanr> zanrovi = zanrService.findAll();
		
		return new ResponseEntity<>(zanrovi, HttpStatus.OK);
	}

}
