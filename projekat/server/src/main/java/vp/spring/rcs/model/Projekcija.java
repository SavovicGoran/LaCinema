package vp.spring.rcs.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Projekcija {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String datum;
	private String vreme;
	
	public Projekcija() {
		super();
		
	}
	public Projekcija(Long id, String datum, String vreme) {
		super();
		this.id = id;
		this.datum = datum;
		this.vreme = vreme;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDatum() {
		return datum;
	}
	public void setDatum(String datum) {
		this.datum = datum;
	}
	public String getVreme() {
		return vreme;
	}
	public void setVreme(String vreme) {
		this.vreme = vreme;
	}
	
	

}
