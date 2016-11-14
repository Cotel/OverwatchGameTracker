package com.example.controllers;

import com.example.enums.Map;
import com.example.models.Game;
import com.example.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Cotel on 10/11/2016.
 */
@RestController
@CrossOrigin
@RequestMapping(value="/api")
public class GameAPIController {

    @Autowired private GameRepository repository;

    @RequestMapping(method = RequestMethod.GET, value="/games")
    public List<Game> getGames() {
        ArrayList<Game> games = new ArrayList<>();
        for(Game g : repository.findAll()) {
            games.add(g);
        }
        return games;
    }

    @RequestMapping(method = RequestMethod.POST, value="/games")
    public void addGame(@RequestBody Game game) {
        System.out.println(game.toString());
        Game res = new Game();

        res.setMap(game.getMap());
        res.setDate(game.getDate());
        res.setWinned(game.isWinned());

        repository.save(res);
    }

    public void setRepository(GameRepository repository) {
        this.repository = repository;
    }
}
