package com.art.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.art.model.Art;
import com.art.repository.ArtRepository;

@Service
public class ArtServiceImpl implements ArtService {
    
    @Autowired
    private ArtRepository artrepo;

    @Override
    public Art addArt(Art art) {
        return artrepo.save(art);
    }

    @Override
    public List<Art> viewArt() {
        return artrepo.findAll();
    }

    @Override
    public String deleteArt(Integer id) {
        Optional<Art> artOpt = artrepo.findById(id);
        if(artOpt.isPresent()) {
            artrepo.deleteById(id);
            return "Art deleted successfully with id: " + id;
        } else {
            return "Art not found with id: " + id;
        }
    }
}