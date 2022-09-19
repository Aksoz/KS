package com.ks.serverksmanagement.service;

import com.ks.serverksmanagement.model.Sozlesme;

import java.util.List;

public interface SozlesmeService {

    public Sozlesme saveSozlesme(Sozlesme sozlesme);


    public Sozlesme updateSozlesme(Sozlesme sozlesme);

    public void deleteSozlesme(Long sozlesmeId);


    public Sozlesme findBytaraf1id(Long taraf1id);


    public Sozlesme findBytaraf2id(Long taraf2id);


    public List<Sozlesme> findAllSozlesmes();


    public Long numberOfSozlesmes();
}
