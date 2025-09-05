package com.art.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "arts")
public class Art {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String artname;
  private int price;
  private String category;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getArtname() {
    return artname;
  }

  public void setArtname(String artname) {
    this.artname = artname;
  }

  public int getPrice() {
    return price;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

}