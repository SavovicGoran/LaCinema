package vp.spring.rcs.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Film {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String naslov;
	private String radnja;
	
	@ManyToOne
	private Zanr zanr;
	
	@OneToMany
	private List<Projekcija> projekcije;

	public Film() {
		super();
		
	}

	public Film(Long id, String naslov, String radnja, Zanr zanr, List<Projekcija> projekcije) {
		super();
		this.id = id;
		this.naslov = naslov;
		this.radnja = radnja;
		this.zanr = zanr;
		this.projekcije = projekcije;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNaslov() {
		return naslov;
	}

	public void setNaslov(String naslov) {
		this.naslov = naslov;
	}

	public String getRadnja() {
		return radnja;
	}

	public void setRadnja(String radnja) {
		this.radnja = radnja;
	}

	public Zanr getZanr() {
		return zanr;
	}

	public void setZanr(Zanr zanr) {
		this.zanr = zanr;
	}

	public List<Projekcija> getProjekcije() {
		return projekcije;
	}

	public void setProjekcije(List<Projekcija> projekcije) {
		this.projekcije = projekcije;
	}

	
	

	
}
