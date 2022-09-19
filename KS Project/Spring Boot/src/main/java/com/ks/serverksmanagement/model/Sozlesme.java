package com.ks.serverksmanagement.model;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name ="sozlesme")
public class Sozlesme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "baslik")
    private String baslik;

    @Column(name = "icerik")
    private String icerik;

    @Column(name = "taraf1")
    private String taraf1;

    @Column(name = "taraf2")
    private String taraf2;

    @Column(name = "cayma")
    private String cayma;

    @Column(name = "tarih")
    private LocalDateTime tarih;

    @Column(name = "taraf1id")
    private Long taraf1id;

    @Column(name = "taraf2id")
    private Long taraf2id;




}
