package com.example.models;

import com.example.enums.Map;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

/**
 * Created by Cotel on 10/11/2016.
 */
@Entity
public class Game {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Map map;
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime date;
    private boolean winned;

    public Game() {

    }

    public Game(Map map, LocalDateTime date, boolean winned) {
        this.map = map;
        this.date = date;
        this.winned = winned;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Map getMap() {
        return map;
    }

    public void setMap(Map map) {
        this.map = map;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public boolean isWinned() {
        return winned;
    }

    public void setWinned(boolean winned) {
        this.winned = winned;
    }

    @Override
    public String toString() {
        return "Game{" +
                "id=" + id +
                ", map=" + map +
                ", date=" + date +
                ", winned=" + winned +
                '}';
    }
}
