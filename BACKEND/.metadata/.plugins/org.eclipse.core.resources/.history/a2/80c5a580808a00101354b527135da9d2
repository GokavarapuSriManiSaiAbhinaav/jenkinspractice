package com.art.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.art.model.Art;
import com.art.service.ArtService;

@RestController
@RequestMapping("/art")
@CrossOrigin(origins = "*")
public class ArtController {

  @Autowired
  private ArtService artService;

  @GetMapping("/")
  public String home() {
    return "Art Home Page";
  }

  // Add new Art
  @PostMapping("/add")
  public Art addArt(@RequestBody Art art) {
    return artService.addArt(art);
  }

  // View all Art
  @GetMapping("/view")
  public List<Art> viewArt() {
    return artService.viewArt();
  }

  // Delete Art by ID
  @DeleteMapping("/delete/{id}")
  public String deleteArt(@PathVariable Integer id) {
    return artService.deleteArt(id);
  }
}