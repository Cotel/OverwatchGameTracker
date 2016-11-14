package com.example.repositories;

import com.example.models.Game;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Created by Cotel on 10/11/2016.
 */
public interface GameRepository extends CrudRepository<Game, Long> {

    List<Game> findAll();

    List<Game> findByDate(LocalDateTime date);

}
