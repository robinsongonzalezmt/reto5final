package com.example.reto3.repository.CrudRepository;

import com.example.reto3.entities.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageCrudRepository extends CrudRepository<Message, Integer> {
}
