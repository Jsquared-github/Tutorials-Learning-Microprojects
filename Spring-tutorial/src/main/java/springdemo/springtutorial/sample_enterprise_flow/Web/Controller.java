package springdemo.springtutorial.sample_enterprise_flow.Web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import springdemo.springtutorial.sample_enterprise_flow.BusinessService.BusinessService;

@RestController
public class Controller {
    @Autowired
    private BusinessService businessService;

    @GetMapping("/sum")
    public long displaySum() {
        return businessService.calculateSum();
    }
}

