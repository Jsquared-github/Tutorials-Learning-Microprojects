package springdemo.springtutorial;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import springdemo.springtutorial.game.GameRunner;
import springdemo.springtutorial.game.MarioGame;
import springdemo.springtutorial.game.SuperContraGame;

@SpringBootApplication
public class SpringTutorialApplication {
    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(SpringTutorialApplication.class, args);

        MarioGame game= new MarioGame();
        //SuperContraGame game = new SuperContraGame();

        GameRunner runner = context.getBean(GameRunner.class);
        //GameRunner runner= new GameRunner(game);

        runner.runGame();
    }

}
