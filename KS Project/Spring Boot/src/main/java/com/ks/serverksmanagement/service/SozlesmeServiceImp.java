package com.ks.serverksmanagement.service;

import com.ks.serverksmanagement.model.Sozlesme;
import com.ks.serverksmanagement.model.User;
import com.ks.serverksmanagement.repository.SozlesmeRepository;
import com.ks.serverksmanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SozlesmeServiceImp implements SozlesmeService {

    @Autowired
    private SozlesmeRepository sozlesmeRepository;


    @Override
    public Sozlesme saveSozlesme(Sozlesme sozlesme)
    {
        return sozlesmeRepository.save(sozlesme);
    }

    @Override
    public Sozlesme updateSozlesme(Sozlesme sozlesme) {
        return sozlesmeRepository.save(sozlesme);
    }

    @Override
    public void deleteSozlesme(Long sozlesmeId) {
        sozlesmeRepository.deleteById(sozlesmeId);
    }

    @Override
    public Sozlesme findBytaraf1id(Long taraf1id){
        return sozlesmeRepository.findBytaraf1id(taraf1id).orElse(null);
    }

    @Override
    public Sozlesme findBytaraf2id(Long taraf2id){
        return sozlesmeRepository.findBytaraf2id(taraf2id).orElse(null);
    }

    @Override
    public List<Sozlesme> findAllSozlesmes() {
        return sozlesmeRepository.findAll();
    }

    @Override
    public Long numberOfSozlesmes() {
        return sozlesmeRepository.count();
    }

}
