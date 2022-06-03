package springdemo.springtutorial.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class GameRunner {

    //@Autowired
    private GameConsole game;

    @Autowired
    public void setGame(GameConsole game) {
        this.game = game;
    }

    //@Autowired
    //public GameRunner(GameConsole game) {
    //    this.game=game;
    //}

    public void runGame(){
        System.out.println();
        game.up();
        game.down();
        game.left();
        game.right();
        game.jump();
        game.shoot();
    }
}
