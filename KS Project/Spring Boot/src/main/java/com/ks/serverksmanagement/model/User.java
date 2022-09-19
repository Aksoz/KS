package com.ks.serverksmanagement.model;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="isim")
    private String isim;

    @Column(name="soyisim")
    private String soyisim;

    @Column(name="password")
    private String password;

    @Column(name="mail")
    private String mail;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;

    @Column(name="vkn")
    private String vkn;

    @Transient
    private String token;
}
