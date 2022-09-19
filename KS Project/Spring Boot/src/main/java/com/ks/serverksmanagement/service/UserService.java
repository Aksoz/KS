package com.ks.serverksmanagement.service;

import com.ks.serverksmanagement.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public User updateUser(User user);

    public void deleteUser(Long userId);

    public User findBymail(String mail);

    public List<User> findAllUsers();


    public Long numberOfUsers();
}
